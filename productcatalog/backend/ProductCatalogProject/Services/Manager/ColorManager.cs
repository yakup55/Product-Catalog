using AutoMapper;
using Entities.Dtos;
using Entities.Exceptions;
using Entities.Model;
using Repositories.Contracts;
using Services.Service;
using System.Linq.Expressions;

namespace Services.Manager
{
    public class ColorManager : IColorService
    {
        private readonly IColorRepository repository;
        private readonly IMapper mapper;

        public ColorManager(IColorRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        public Color AddColor(ColorDto color)
        {
            if (color is null)
            {
                throw new ArgumentNullException();
            }
            var add = mapper.Map<Color>(color);
            repository.Add(add);
            return add;
        }

        public void DeleteColor(int id)
        {
          var one=GetOne(id);
            if (one is null)
            {
                throw new ColorNotFoundException(id);
            }
            repository.Delete(one);
        }

        public List<Color> GetList(Expression<Func<Color, bool>> filter = null)
        {
            return repository.GetList(filter);
        }

        public Color GetOne(int id)
        {
            var one = repository.GetOne(x => x.ColorId == id);
            if (one is null)
            {
                throw new ColorNotFoundException(id);
            }
            return one;
        }

        public Color UpdateColor(Color color, int id)
        {
          var update=GetOne(id);
            update.ColorName = color.ColorName;
            repository.Update(update);
            return update;
        }
    }
}
