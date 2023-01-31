using Entities.Model;
using Microsoft.EntityFrameworkCore;
using MimeKit.Encodings;
using Repositories.Concrete.Context;
using Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.EntityFramework
{
    public class EFProductRepository : EFBaseRepository<Product>, IProductRepository
    {
        public EFProductRepository(AppDbContext context) : base(context)
        {
        }

        public List<Product> BrandIdList(int id)
        {
            return context.Products.Where(x => x.BrandId == id).ToList();
        }

        public List<Product> CategoryIdList(int id)
        {
            return context.Products.Where(x=>x.CategoryId== id).ToList();
        }

        public Product GetOneProductWithDetail(int id)
        {
            return context.Products.Include(x => x.ProductDetail).Include(x => x.Category).Include(x => x.Color).Include(x => x.Brand).Include(x=>x.UsingStatus).ToList().Where(x=>x.ProductId==id).SingleOrDefault() ;
        }

        public List<Product> OfferUser(string id)
        {
            var offer = new Offer();
          var offers=  offer.UserId= id;

           return context.Products.Where(x=>x.UserId==id).ToList();
        }
    }
}
