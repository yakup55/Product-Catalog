using Entities.Dtos;
using Entities.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public interface IProductService
    {
        List<Product> GetList(Expression<Func<Product, bool>> filter = null);
        Product AddProduct(ProductDto product);
        Product UpdateProduct(Product product, int id);
        void DeleteProduct(int id);
        Product GetOne(int id);
        Product GetOneProductWithDetail(int id);


        List<Product> BrandIdList(int id);
        List<Product> CategoryIdList(int id);
        List<Product> OfferUser(string id);


    }
}
