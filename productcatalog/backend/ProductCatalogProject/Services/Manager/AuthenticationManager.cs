using AutoMapper;
using Entities.Dtos;
using Entities.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Repositories.Contracts;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Services.Manager
{
    public class AuthenticationManager : IAuthenticationService
    {
        private readonly IMapper mapper;
        private readonly IConfiguration configuration;
        private readonly UserManager<User> userManager;

        private User? user;

        public AuthenticationManager(IMapper mapper, IConfiguration configuration, UserManager<User> userManager)
        {
            this.mapper = mapper;
            this.configuration = configuration;
            this.userManager = userManager;
        }

        public async Task<string> CreateToken()
        {
            var signingCredentials = GetSigningCredentials();
            var claims = await GetClaims();
            var tokenOptions = GenerateTokenOptions(signingCredentials, claims);

            return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        }

        public async Task<User> GetOneUser(string email)
        {
            return await userManager.FindByEmailAsync(email);
        }

        public async Task<IdentityResult> RegisterUser(UserForRegisterDto registerDto)
        {
            var user = mapper.Map<User>(registerDto);
            var result = await userManager.CreateAsync(user, registerDto.Password);
            if (result.Succeeded)
                await userManager.AddToRoleAsync(user, registerDto.role);
            return result;
        }

        public async Task<bool> ValidateUser(UserForLoginDto loginDto)
        {
            user = await userManager.FindByEmailAsync(loginDto.Email);
            var result = (user != null &&
                await userManager.CheckPasswordAsync(user, loginDto.Password));
            if (!result)
            {

            }
            return result;
        }
        private SigningCredentials GetSigningCredentials()
        {
            var jwtSettings = configuration.GetSection("JWT");
            var key = Encoding.UTF8.GetBytes(jwtSettings["Secret"]);
            var secret = new SymmetricSecurityKey(key);
            return new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
        }

        private async Task<List<Claim>> GetClaims()
        {
            var claims = new List<Claim> { new Claim(ClaimTypes.Name, user.UserName) };
            var roles = await userManager
                .GetRolesAsync(user);

            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            return claims;
        }

        private JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials,
            List<Claim> claims)
        {
            var jwtSettings = configuration.GetSection("JWT");
            var tokenOptions = new JwtSecurityToken(
                issuer: jwtSettings["ValidIssuer"],
                audience: jwtSettings["ValidAudience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(Convert.ToDouble(jwtSettings["expires"])),
                signingCredentials: signingCredentials);
            return tokenOptions;
        }

        public async Task<User> GetOne(string id)
        {
            return await userManager.FindByIdAsync(id);
        }
    }
}
