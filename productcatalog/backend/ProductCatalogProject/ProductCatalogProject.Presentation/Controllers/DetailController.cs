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

        [HttpGet]
        public IActionResult GetDetailList()
        {
            return Ok(service.GetDetailList()); 
        }

        [HttpPost]
        public IActionResult DetailAdd([FromBody]DetailDto detail)
        {
            service.AddDetail(detail);
            return Ok(detail);
        }
        [HttpGet("{id}")]
        public IActionResult GetOneDetail([FromRoute(Name ="id")]int id)
        {
            var one=service.GetOneDetail(id);
            return Ok(one);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteDetail([FromRoute(Name ="id")]int id)
        { 
            service.DeleteDetail(id);
            return Ok();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateDetail([FromBody] ProductDetail detail, [FromRoute(Name ="id")]int id)
        {
            return Ok(Accepted(service.UpdateDetail(detail, id)));
        }
    }
}
