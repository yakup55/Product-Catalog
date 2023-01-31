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
    [Route("api/offers")]
    public class OfferController : ControllerBase
    {
        private readonly IOfferService service;

        public OfferController(IOfferService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetOfferList()
        {
            return Ok(service.GetOfferList());
        }
        [HttpPost]
        public IActionResult AddOffer([FromBody] OfferDto offer)
        {
            
            return Ok(service.AddOffer(offer));
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteOffer([FromRoute(Name = "id")] int id)
        {
            service.DeleteOffer(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateOffer([FromBody] Offer offer, [FromRoute(Name = "id")] int id)
        {
            return Ok(Accepted(service.UpdateOffer(offer, id)));
        }
        [HttpGet("{id}")]
        public IActionResult GetOneOffer([FromRoute(Name = "id")] int id)
        {
            var one = service.GetOneOffer(id);
            return Ok(one);
        }
        [HttpGet("offerproduct/{id}")]
        public IActionResult OfferProduct(string id)
        {

            return Ok(service.OfferProduct(id));
        }
        [HttpGet("offerlist/{id}")]
        public IActionResult OfferList(int id)
        {

            return Ok(service.OfferList(id));
        }

    }
}
