using Entities.Dtos;
using Entities.Model;
using System.Linq.Expressions;

namespace Services.Service
{
    public interface IBrandService
    {
        List<Brand> GetList(Expression<Func<Brand, bool>> filter = null);
        Brand AddBrand(BrandDto brand);
        Brand UpdateBrand(Brand brand, int id);
        void DeleteBrand(int id);
        Brand GetOne(int id);
    }
}
