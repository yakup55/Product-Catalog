using Entities.Dtos;
using Entities.Model;
using Microsoft.EntityFrameworkCore;
using Repositories.Concrete.Context;
using Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.EntityFramework
{
    public class EFOfferRepository : EFBaseRepository<Offer>, IOfferRepository
    {
        public EFOfferRepository(AppDbContext context) : base(context)
        {
            
        }

        public List<Offer> OfferList(int id)
        {
            return context.Offers.Include(x=>x.Product).Where(x=>x.ProductId== id).ToList();  
        }

        public List<Offer> OfferProduct(string id)
        {
        return context.Offers.Include(x=>x.Product).Where(x=>x.UserId== id).ToList();   
        }
    }
}
