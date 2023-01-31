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
    public class BrandManager : IBrandService
    {
        private readonly IBrandRepository repository;
        private readonly IMapper mapper;

        public BrandManager(IBrandRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        public Brand AddBrand(BrandDto brand)
        {
            if (brand is null)
            {
                throw new ArgumentNullException();
            }
            var add=mapper.Map<Brand>(brand);
            repository.Add(add);
            return add;
        }

        public void DeleteBrand(int id)
        {
           var one=GetOne(id);
            if (one is null)
            {
                throw new BrandNotFountException(id);
            }
            repository.Delete(one); 
        }

        public List<Brand> GetList(Expression<Func<Brand, bool>> filter = null)
        {
         return repository.GetList(filter);
        }

        public Brand GetOne(int id)
        {
           var one =repository.GetOne(x=>x.BrandId== id);
            if (one is null)
            {
                throw new BrandNotFountException(id);
            }
            return one;
        }

        public Brand UpdateBrand(Brand brand, int id)
        {
           var update=GetOne(id);
            update.BrandName = brand.BrandName;
            repository.Update(update);
            return update;
        }
    }
}
