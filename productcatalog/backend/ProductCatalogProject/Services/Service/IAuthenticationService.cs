using Entities.Dtos;
using Entities.Model;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public interface IAuthenticationService
    {
        Task<IdentityResult> RegisterUser(UserForRegisterDto registerDto);
        Task<bool> ValidateUser(UserForLoginDto loginDto);
        Task<string> CreateToken();
        Task<User> GetOneUser(string email);
        Task<User> GetOne(string id);
    }
}
