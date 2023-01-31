using Entities.Dtos;
using Entities.Model;
using System.Linq.Expressions;

namespace Services.Service
{
    public interface IColorService
    {
        List<Color> GetList(Expression<Func<Color, bool>> filter = null);
        Color AddColor(ColorDto color);
        Color UpdateColor(Color color, int id);
        void DeleteColor(int id);
        Color GetOne(int id);    
    }
}
