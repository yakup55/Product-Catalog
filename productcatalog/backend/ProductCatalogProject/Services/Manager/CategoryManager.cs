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
using System.Net.WebSockets;
using System.Text;
using System.Threading.Tasks;

namespace Services.Manager
{
    public class CategoryManager:ICategoryService
    {
        private readonly ICategoryRepository repository;
        private readonly IMapper mapper;

        public CategoryManager(ICategoryRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        public Category AddCategory(CategoryDto category)
        {
            if (category is null)
            {
                throw new ArgumentNullException();
            }
            var add=mapper.Map<Category>(category);
            repository.Add(add);
            return add;
        }

        public void DeleteCategory(int id)
        {
            var one=GetOne(id);
            if (one is null)
            {
                throw new CategoryNotFoundException(id);
            }
            repository.Delete(one);
        }

        public List<Category> GetList(Expression<Func<Category, bool>> filter = null)
        {
            return repository.GetList(filter);  
        }

        public Category GetOne(int id)
        {
        var one=repository.GetOne(x=>x.CategoryId== id);
            if (one is null)
            {
                throw new CategoryNotFoundException(id);
            }
            return one;
        }

        public Category UpdateCategory(Category category, int id)
        {
            var update=GetOne(id);
            update.CategoryName = category.CategoryName;
            update.CategoryStatus = category.CategoryStatus;
            repository.Update(update);
            return update;
        }
    }
}
