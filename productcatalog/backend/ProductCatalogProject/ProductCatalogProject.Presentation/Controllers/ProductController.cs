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
    [Route("api/products")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService service;
        public ProductController(IProductService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult ProductList()
        {
            return Ok(service.GetList().Where(x => x.ProductStatus == true).ToList());
        }
        [HttpPost]
        public IActionResult AddProduct([FromBody()] ProductDto product)
        {
            product.ProductStatus = true;
            product.ProductIsSold = true;
            var add = service.AddProduct(product);
            return Ok(add);
        }
        [HttpGet("{id}")]
        public IActionResult GetOneProduct([FromRoute(Name = "id")] int id)
        {
            var one = service.GetOne(id); return Ok(one);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct([FromRoute] int id)
        {
            service.DeleteProduct(id); return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateProduct([FromBody] Product product, [FromRoute(Name ="id")] int id)
        {
            product.ProductStatus = true;
            return Accepted(Ok(service.UpdateProduct(product,id)));
        }
        [HttpGet("getoneproductwithdetail/{id:int}")]
        public IActionResult GetOneProductDetail([FromRoute(Name = "id")] int id)
        {
            return Ok(service.GetOneProductWithDetail(id));
        }
        [HttpGet("brandidlist/{id:int}")]
        public IActionResult BrandIdList([FromRoute] int id)
        {
            return Ok(service.BrandIdList(id));
        }
        [HttpGet("categoryidlist/{id:int}")]
        public IActionResult CategoryIdList([FromRoute(Name = "id")] int id)
        {
            return Ok(service.CategoryIdList(id));
        }
        [HttpGet("offerproductfalse/{id:int}")]
        public IActionResult OfferProductUpdate([FromRoute(Name ="id")] int id)
        {
            var status = service.GetOne(id);
            status.ProductOffer = false;
            return Ok(Accepted(service.UpdateProduct(status,id)));
        }
        [HttpGet("offerproducttrue/{id:int}")]
        public IActionResult OfferProductTrue([FromRoute(Name = "id")] int id)
        {
            var status = service.GetOne(id);
            status.ProductOffer = true;
            return Ok(Accepted(service.UpdateProduct(status, id)));
        }
        [HttpGet("offerproductissoldtrue/{id:int}")]
        public IActionResult OfferProductIsSoldeTrue([FromRoute(Name = "id")] int id)
        {
            var status = service.GetOne(id);
            status.ProductIsSold = true;
            return Ok(Accepted(service.UpdateProduct(status, id)));
        }
        [HttpGet("offerproductissoldfalse/{id:int}")]
        public IActionResult OfferProductIsSoldeFalse([FromRoute(Name = "id")] int id)
        {
            var status = service.GetOne(id);
            status.ProductIsSold = false;
            return Ok(Accepted(service.UpdateProduct(status, id)));
        }
        [HttpGet("true/{id:int}")]
        public IActionResult True([FromRoute(Name = "id")] int id)
        {
            var status = service.GetOne(id);
            status.ProductIsSold = true;
            status.ProductOffer = true;
            return Ok(Accepted(service.UpdateProduct(status, id)));
        }
        [HttpGet("offeruser/{id}")]
        public IActionResult OfferUser(string id)
        {

            return Ok(service.OfferUser(id));
        }
       
    }
}
