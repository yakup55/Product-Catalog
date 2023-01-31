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
    public class ProductManager : IProductService
    {
        private readonly IProductRepository repository;
        private readonly IMapper mapper;
        private readonly ICategoryService category;
        private readonly IColorService color;
        private readonly IBrandService brand;

        public ProductManager(IProductRepository repository, IMapper mapper, ICategoryService category, IColorService color, IBrandService brand)
        {
            this.repository = repository;
            this.mapper = mapper;
            this.category = category;
            this.color = color;
            this.brand = brand;
        }

        public Product AddProduct(ProductDto product)
        {
            if (product == null) throw new ArgumentNullException();
            category.GetOne(product.CategoryId);
            color.GetOne(product.ColorId);
            brand.GetOne(product.BrandId);
            var add=mapper.Map<Product>(product);
            repository.Add(add);
            return add;
        }

        public List<Product> BrandIdList(int id)
        {
           
            return repository.BrandIdList(id);
        }

        public List<Product> CategoryIdList(int id)
        {
            return repository.CategoryIdList(id);
        }

        public void DeleteProduct(int id)
        {
            var one = GetOne(id);
            if (one is null)
            {
                throw new ProductNotFoundException(id);
            }
             repository.Delete(one);
        }

        public List<Product> GetList(Expression<Func<Product, bool>> filter = null)
        {
            return repository.GetList(filter);
        }

        public Product GetOne(int id)
        {
            var one = repository.GetOne(x => x.ProductId == id);
            if (one is null)
            {
                throw new ProductNotFoundException(id);
            }
            return one;
        }

        public Product GetOneProductWithDetail(int id)
        {
            return repository.GetOneProductWithDetail(id);
        }

      

        public List<Product> OfferUser(string id)
        {
          return repository.OfferUser(id);
        }

        public Product UpdateProduct(Product product, int id)
        {
            var update=GetOne(id);
            update.ProductName=product.ProductName; 
            update.ProductPrice=product.ProductPrice;
            update.ProductDescription=product.ProductDescription;
            update.ProductStatus=product.ProductStatus;
            update.ProductOffer=product.ProductOffer;
            update.CategoryId=product.CategoryId;
            update.UsingStatusId=product.UsingStatusId;
            update.ProductIsSold=product.ProductIsSold;
            repository.Update(update);
            return update;
        }
    }
}
