using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Exceptions
{
    public class UsingStatusNotFoundException : NotFoundException
    {
        public UsingStatusNotFoundException(int id) : base($"Using Status with {id} could not found ")
        {
        }
    }
}
