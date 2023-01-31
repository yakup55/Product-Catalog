using Entities.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Contracts
{
    public interface IProductRepository:IEntityRepository<Product>
    {
        Product GetOneProductWithDetail(int id);
        List<Product> BrandIdList(int id);
        List<Product> CategoryIdList(int id);
        List<Product>OfferUser(string id);
       
    }
}
