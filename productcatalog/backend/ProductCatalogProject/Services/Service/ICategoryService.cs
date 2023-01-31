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
    public interface ICategoryService
    {
        List<Category> GetList(Expression<Func<Category, bool>> filter = null);
        Category AddCategory(CategoryDto category);
        Category UpdateCategory(Category category, int id);
        void DeleteCategory(int id);
        Category GetOne(int id);
    }
}
