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
    public class UsingManager : IUsingStatusService
    {
        private readonly IUsingStatusRepository repository;
        private readonly IMapper mapper;

        public UsingManager(IUsingStatusRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        public UsingStatus AddUsingStatus(UsingStatusDto status)
        {
            if (status is null)
            {
                throw new ArgumentNullException();
            }
            
            var add=mapper.Map<UsingStatus>(status);
            repository.Add(add);
            return add;
        }

        public void DeleteUsingStatus(int id)
        {
            var one = GetOneUsingStatus(id);
            if (one is null)
            {
                throw new UsingStatusNotFoundException(id);
            }
            repository.Delete(one);
        }

        public UsingStatus GetOneUsingStatus(int id)
        {
            var one = repository.GetOne(x => x.UsingStatusId == id);
            if (one is null)
            {
                throw new UsingStatusNotFoundException(id);
            }
            return one;
        }

        public List<UsingStatus> GetUsingStatusList(Expression<Func<UsingStatus, bool>> filter = null)
        {
            return repository.GetList(filter);
        }

        public UsingStatus UpdateUsingStatus(UsingStatus status, int id)
        {
            var update=GetOneUsingStatus(id);
            update.Name= status.Name;   
            repository.Update(update);
            return status;
        }
    }
}
