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
    public class DetailManager:IDetailService
    {
        private readonly IDetailRepository repository;
        private readonly IMapper mapper;
        private readonly IProductService service;

        public DetailManager(IDetailRepository repository, IMapper mapper, IProductService service)
        {
            this.repository = repository;
            this.mapper = mapper;
            this.service = service;
        }

        public ProductDetail AddDetail(DetailDto detail)
        {
            if (detail is null)
            {
                throw new ArgumentNullException();
            }
            service.GetOne(detail.ProductId);
            var add=mapper.Map<ProductDetail>(detail);
             repository.Add(add);
            return add;
        }

        public void DeleteDetail(int id)
        {
            var one = GetOneDetail(id);
            if (one is null)
            {
                throw new DetailNotFoundException(id);
            }
            repository.Delete(one);
        }

        public List<ProductDetail> GetDetailList(Expression<Func<ProductDetail, bool>> filter = null)
        {
           return repository.GetList(filter);
        }

        public ProductDetail GetOneDetail(int id)
        {
            var one = repository.GetOne(x => x.DetailId == id);
            if (one is null)
            {
                throw new DetailNotFoundException(id);
            }
            return one;
        }

        public ProductDetail UpdateDetail(ProductDetail detail, int id)
        {
            var update = GetOneDetail(id);
            update.DetailExplanation = detail.DetailExplanation;
            update.ProductId= detail.ProductId;
            repository.Update(update);
            return update;
        }
    }
}
