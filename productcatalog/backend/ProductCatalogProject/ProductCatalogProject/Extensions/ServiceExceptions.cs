using Entities.Dtos;
using Entities.Model;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.IdentityModel.Tokens;
using Repositories.Concrete.Context;
using Repositories.Contracts;
using Repositories.EntityFramework;
using Services.Manager;
using Services.Service;
using System.Text;

namespace ProductCatalogProject.Extensions
{
    public static class ServiceExceptions
    {
        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });
        }
        public static void ConfigureSqlConnection(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<AppDbContext>(
                x => x.UseSqlServer(configuration.GetConnectionString("sqlConnection")));
        }
        public static void RegisterToIo(this IServiceCollection services)
        {
            //PRODUCT
            services.AddScoped<IProductService, ProductManager>();
            services.AddScoped<IProductRepository, EFProductRepository>();
            //CATEGORY
            services.AddScoped<ICategoryService, CategoryManager>();
            services.AddScoped<ICategoryRepository, EFCategoryRepository>();
            //COLOR
            services.AddScoped<IColorService, ColorManager>();
            services.AddScoped<IColorRepository, EFColorRepository>();
            //BRAND
            services.AddScoped<IBrandService, BrandManager>();
            services.AddScoped<IBrandRepository, EFBrandRepository>();
            //DETAİL
            services.AddScoped<IDetailService, DetailManager>();
            services.AddScoped<IDetailRepository, EFDetailRepository>();
            //OFFER
            services.AddScoped<IOfferService, OfferManager>();
            services.AddScoped<IOfferRepository, EFOfferRepository>();
            //USİNG STATUS
            services.AddScoped<IUsingStatusService, UsingManager>();
            services.AddScoped<IUsingStatusRepository, EFUsingStatusRepository>();
            //EMAİL
            services.AddScoped<IEmailService, EmailManager>();
            //AUTHENTİCATİON
            services.AddScoped<IAuthenticationService, AuthenticationManager>();
        }
        public static void ConfigureIdentity(this IServiceCollection services)
        {
            var builder = services.AddIdentity<User, IdentityRole>(opt =>
            {
                opt.Password.RequireDigit = true;
                opt.Password.RequireLowercase = false;
                opt.Password.RequireUppercase = false;
                opt.Password.RequireNonAlphanumeric = false;
                opt.Password.RequiredLength = 8;
                opt.User.RequireUniqueEmail = true;
            }).AddEntityFrameworkStores<AppDbContext>().AddDefaultTokenProviders();
        }
        public static void ConfigureJWT(this IServiceCollection services, IConfiguration configuration)
        {
            var jwtSettings = configuration.GetSection("JWT");
            var secretKey = jwtSettings["Secret"];
            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = jwtSettings["ValidIssuer"],
                    ValidAudience = jwtSettings["ValidAudience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey))

                };
            });
        }
    }
}
