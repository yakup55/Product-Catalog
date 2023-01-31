using Entities.Dtos;
using Entities.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public interface IDetailService
    {
        ProductDetail AddDetail(DetailDto detail);
    }
}
