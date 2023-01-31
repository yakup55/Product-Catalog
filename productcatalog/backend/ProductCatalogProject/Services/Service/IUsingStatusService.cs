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
    public interface IUsingStatusService
    {
        List<UsingStatus> GetUsingStatusList(Expression<Func<UsingStatus, bool>> filter=null);
        UsingStatus AddUsingStatus(UsingStatusDto status);
        UsingStatus UpdateUsingStatus(UsingStatus status,int id);
        void DeleteUsingStatus(int id);
        UsingStatus GetOneUsingStatus(int id);
    }
}
