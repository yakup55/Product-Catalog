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
    [Route("api/categories")]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService service;
        public CategoryController(ICategoryService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult CategoryList()
        {
            return Ok(service.GetList());
        }
        [HttpGet("{id}")]
        public IActionResult GetOneCategory([FromRoute(Name ="id")]int id) 
        {
            var one =service.GetOne(id); return Ok(one);
        }
        [HttpPost]
        public IActionResult AddCategory([FromBody] CategoryDto category)
        {
            category.CategoryStatus = true;
            var add=service.AddCategory(category);
            return Ok(add);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteCategory([FromRoute]int id)
        {
            service.DeleteCategory(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateCategory([FromBody] Category category, [FromRoute(Name ="id")]int id)
        {
            category.CategoryStatus = true;
            return Accepted(Ok(service.UpdateCategory(category, id)));
        }
    }
}
