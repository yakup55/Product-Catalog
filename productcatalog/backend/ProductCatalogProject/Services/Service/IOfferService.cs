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
    public interface IOfferService
    {
        List<Offer> GetOfferList(Expression<Func<Offer, bool>> filter = null);
        Offer AddOffer(OfferDto offer);
        Offer UpdateOffer(Offer offer, int id);
        void DeleteOffer(int id);
        Offer GetOneOffer(int id);

        List<Offer> OfferProduct(string id);
        List<Offer> OfferList(int id);
    }
}
