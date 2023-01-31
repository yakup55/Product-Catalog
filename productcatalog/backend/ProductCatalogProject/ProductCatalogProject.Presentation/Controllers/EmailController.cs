using Entities.Dtos;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MimeKit.Text;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductCatalogProject.Presentation.Controllers
{
    [ApiController]
    [Route("api/email")]
    public class EmailController : ControllerBase
    {
        private readonly IEmailService service;
        public EmailController(IEmailService service)
        {
            this.service = service;
        }
        [HttpPost]
        public IActionResult EmailSend(string email,string konu,string mesaj)
        {
            var message = new Message(new string[]
                {email}, konu,mesaj
                );
            service.SendEmail(message);
            return Ok("Başarılı");
        }
    }
}
