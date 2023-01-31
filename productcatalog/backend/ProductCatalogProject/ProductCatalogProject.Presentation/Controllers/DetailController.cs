using Entities.Dtos;
using Entities.Model;
using Microsoft.AspNetCore.Mvc;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductCatalogProject.Presentation.Controllers
{
    [ApiController]
    [Route("api/details")]
    public class DetailController:ControllerBase
    {
        private readonly IDetailService service;

        public DetailController(IDetailService service)
        {
            this.service = service;
        }

        [HttpPost]
        public IActionResult DetailAdd([FromBody]DetailDto detail)
        {
            service.AddDetail(detail);
            return Ok(detail);
        }
    }
}
