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
    public interface IDetailService
    {
        List<ProductDetail> GetDetailList(Expression<Func<ProductDetail,bool>>filter=null);   
        ProductDetail AddDetail(DetailDto detail);
        ProductDetail UpdateDetail(ProductDetail detail,int id);   
        void DeleteDetail(int id);
        ProductDetail GetOneDetail(int id);
    }
}
