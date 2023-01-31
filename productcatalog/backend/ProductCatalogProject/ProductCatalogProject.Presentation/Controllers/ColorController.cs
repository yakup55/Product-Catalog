using Entities.Dtos;
using Entities.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductCatalogProject.Presentation.Controllers
{
    [ApiController]
    [Route("api/colors")]
    public class ColorController : ControllerBase
    {
        private readonly IColorService service;

        public ColorController(IColorService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult ColorList()
        {
            return Ok(service.GetList());
        }
        [HttpGet("{id}")]
        public IActionResult GetOneColor([FromRoute(Name ="id")]int id)
        {
            var one = service.GetOne(id);
            return Ok(one);
        }
        [HttpPost]
        public IActionResult AddColor([FromBody]ColorDto color)
        {
          var add=  service.AddColor(color);
            return Ok(add);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteColor([FromRoute]int  id)
        { 
            service.DeleteColor(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateColor([FromBody]Color color, [FromRoute]int id)
        {
            return Accepted(Ok(service.UpdateColor(color,id)));
        }
    }
}
