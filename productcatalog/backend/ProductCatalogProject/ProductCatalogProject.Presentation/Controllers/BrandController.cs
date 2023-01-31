using Entities.Dtos;
using Entities.Model;
using Microsoft.AspNetCore.Authorization;
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
    [Route("api/brands")]
    public class BrandController:ControllerBase
    {
        private readonly IBrandService service;

        public BrandController(IBrandService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult BrandList()
        {
            return Ok(service.GetList());
        }
        [HttpGet("{id}")]
        public IActionResult GetOneBrand([FromRoute] int id)
        {
            var one=service.GetOne(id); return Ok(one);
        }
        [HttpPost]
        public IActionResult AddBrand([FromBody]BrandDto brand)
        {
            var add=service.AddBrand(brand);
            return Ok(add);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteBrand([FromRoute] int id)
        {
            service.DeleteBrand(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateBrand(Brand brand,int id) { 
        return Accepted(Ok(service.UpdateBrand(brand,id))); 
        }
            
    }
}
