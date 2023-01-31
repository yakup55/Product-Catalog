using Entities.Dtos;
using Entities.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Contracts
{
    public interface IOfferRepository:IEntityRepository<Offer>
    {
        List<Offer> OfferProduct(string id);
        List<Offer> OfferList(int id);
    }
}
