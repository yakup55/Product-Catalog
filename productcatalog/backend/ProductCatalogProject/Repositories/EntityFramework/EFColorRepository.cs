using Entities.Model;
using Repositories.Concrete.Context;
using Repositories.Contracts;

namespace Repositories.EntityFramework
{
    public class EFColorRepository : EFBaseRepository<Color>, IColorRepository
    {
        public EFColorRepository(AppDbContext context) : base(context)
        {
        }
    }
}
