using Entities.Model;
using Repositories.Concrete.Context;
using Repositories.Contracts;
using System.Security.Cryptography.X509Certificates;

namespace Repositories.EntityFramework
{
    public class EFBrandRepository : EFBaseRepository<Brand>, IBrandRepository
    {
        public EFBrandRepository(AppDbContext context) : base(context)
        {
        }
    }
}
