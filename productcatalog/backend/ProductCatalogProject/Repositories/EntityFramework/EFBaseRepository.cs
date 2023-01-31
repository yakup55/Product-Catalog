using Repositories.Concrete.Context;
using Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.EntityFramework
{
    public abstract class EFBaseRepository<T> : IEntityRepository<T> where T : class
    {
        protected readonly AppDbContext context;

        protected EFBaseRepository(AppDbContext context)
        {
            this.context = context;
        }

        public void Add(T entity)
        {
            context.Entry(entity).State = Microsoft.EntityFrameworkCore.EntityState.Added;
            context.SaveChanges();
        }

        public void Delete(T entity)
        {
            context.Entry(entity).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            context.SaveChanges();
        }

        public List<T> GetList(Expression<Func<T, bool>> filter = null)
        {
            return filter is null ?
                context.Set<T>().ToList():
            context.Set<T>().Where(filter).ToList();
        }

        public T GetOne(Expression<Func<T, bool>> filter)
        {
            return context.Set<T>().Where(filter).SingleOrDefault();
        }

        public void Update(T entity)
        {
            context.Entry(entity).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            context.SaveChanges();
        }
    }
}
