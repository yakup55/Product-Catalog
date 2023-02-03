using Entities.Dtos;
using Entities.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Repositories.Concrete.Config;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace ProductCatalogProject.Presentation.Controllers
{
    [ApiController()]
    [Route("api/authentication")]
    public class AuthenticationController : ControllerBase
    {

        private readonly IAuthenticationService service;
        readonly SignInManager<User> _signInManager;
        private readonly IEmailService emailService;
        public AuthenticationController(IAuthenticationService service, SignInManager<User> signInManager, IEmailService emailService)
        {
            this.service = service;
            _signInManager = signInManager;
            this.emailService = emailService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] UserForRegisterDto registerDto)
        {
            registerDto.role = "User";
            registerDto.UserStatus = true;
            var result = await service.RegisterUser(registerDto);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.TryAddModelError(error.Code, error.Description);
                }
                return BadRequest(ModelState);
            }
            var message = new Message(new string[]
             {registerDto.Email}, "Giriş", "Product catalog projesine Hoş Geldiniz"
             );
            emailService.SendEmail(message);
            return Ok("Kayıt Başarılı");
        }
        [HttpPost("login")]
        public async Task<IActionResult> Authenticate([FromBody] UserForLoginDto loginDto)
        {
            var userDetail = await service.GetOneUser(loginDto.Email);
            if (!await service.ValidateUser(loginDto))
            {
                    return Unauthorized();

            }


            //int count = 0;
            //for (int i = 1; i < 4; i++)
            //{
            //    var user = await service.GetOneUser(loginDto.Email);
            //    if (user.PasswordHash!=loginDto.Password)
            //    {
            //        count++;
            //    }
            //}

            //if (count == 3)
            //{

            //    var message = new Message(new string[]
            //                 {loginDto.Email}, "Hatalı", "3 Kere şifre yanlış girdiniz hesabınız bloke edilmiştir"
            //                 );
            //    emailService.SendEmail(message);
            //}


            if (userDetail.UserStatus == true)
            {
                UserDto userDto = new UserDto()
                {
                    UserId = userDetail.Id,
                    Email = loginDto.Email,
                    UserAccessToken = await service.CreateToken(),
                    UserFirstName = userDetail.FirstName,
                    UserLastName = userDetail.LastName,
                    UserName = userDetail.UserName,
                    UserStatus = userDetail.UserStatus,


                };

                return Ok(userDto);
            }
            else if (userDetail.UserStatus == false)
            {
                return Ok("Hesabınız Bloke Edilmiştir");
            }
            return Ok();

        }
        [HttpPost("logOut")]
        public async Task<IActionResult> LogOut()
        {
            await _signInManager.SignOutAsync();

            return Ok("Çıkış Başarılı");
        }
    }
}
