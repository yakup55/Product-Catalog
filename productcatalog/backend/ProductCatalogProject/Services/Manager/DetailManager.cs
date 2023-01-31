using AutoMapper;
using Entities.Dtos;
using Entities.Model;
using Repositories.Contracts;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
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
    }
}
