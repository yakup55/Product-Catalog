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
    [Route("api/usingstatuses")]
    public class UsingStatusController : ControllerBase
    {
        private readonly IUsingStatusService service;

        public UsingStatusController(IUsingStatusService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IActionResult GetUsingStatusList()
        {
            return Ok(service.GetUsingStatusList());
        }
        [HttpGet("{id}")]
        public IActionResult GetOneUsingStatus([FromRoute(Name = "id")] int id)
        {
            var one = service.GetOneUsingStatus(id);
            return Ok(one);
        }
        [HttpPost]
        public IActionResult AddUsingStatus([FromBody] UsingStatusDto status)
        {
            return Ok(service.AddUsingStatus(status));
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteUsingStatus([FromRoute(Name = "id")] int id)
        {
            service.DeleteUsingStatus(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateUsingStatus([FromBody] UsingStatus status, int id)
        {
            return Ok(Accepted(service.UpdateUsingStatus(status, id)));
        }
    }
}
