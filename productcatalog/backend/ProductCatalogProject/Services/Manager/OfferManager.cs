using AutoMapper;
using Entities.Dtos;
using Entities.Exceptions;
using Entities.Model;
using Repositories.Contracts;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Manager
{
    public class OfferManager : IOfferService
    {
        private readonly IMapper mapper;
        private readonly IOfferRepository repository;
        private readonly IProductService product;
         private readonly IAuthenticationService authen;

        public OfferManager(IMapper mapper, IOfferRepository repository, IProductService product, IAuthenticationService authen)
        {
            this.mapper = mapper;
            this.repository = repository;
            this.product = product;
            this.authen = authen;
        }

        public Offer AddOffer(OfferDto offer)
        {
            offer.OfferTime = DateTime.Now; 
            if (offer is null)
            {
                throw new ArgumentNullException();
            }
            product.GetOne(offer.ProductId);
            var add = mapper.Map<Offer>(offer);
            repository.Add(add);
            return add;
        }

        public void DeleteOffer(int id)
        {
            var one = GetOneOffer(id);
            if (one is null)
            {
                throw new OfferNotFoundException(id);
            }
            repository.Delete(one);
        }

        public List<Offer> GetOfferList(Expression<Func<Offer, bool>> filter = null)
        {
            return repository.GetList(filter);
        }

        public Offer GetOneOffer(int id)
        {
            var one = repository.GetOne(x => x.OfferId == id);
            if (one is null)
            {
                throw new OfferNotFoundException(id);
            }
            return one;
        }

        public List<Offer> OfferList(int id)
        {
            return repository.OfferList(id);
        }

        public List<Offer> OfferProduct(string id)
        {
         return repository.OfferProduct(id);
        }

        public Offer UpdateOffer(Offer offer, int id)
        {
            if (offer is null)
            {
                throw new OfferNotFoundException(id);
            }
            var update = GetOneOffer(id);
            update.OfferPrice = offer.OfferPrice;
            update.OfferTime = offer.OfferTime;
            update.IsAccepted = offer.IsAccepted;
            update.ProductId = offer.ProductId;
            repository.Update(update);
            return update;
        }
    }
}
