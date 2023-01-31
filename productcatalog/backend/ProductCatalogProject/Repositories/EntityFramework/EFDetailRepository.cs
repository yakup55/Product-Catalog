using Entities.Model;
using Repositories.Concrete.Context;
using Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.EntityFramework
{
    public class EFDetailRepository : EFBaseRepository<ProductDetail>, IDetailRepository
    {
        public EFDetailRepository(AppDbContext context) : base(context)
        {
        }
    }
}
