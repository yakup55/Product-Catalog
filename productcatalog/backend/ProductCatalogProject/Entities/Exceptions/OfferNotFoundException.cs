using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Exceptions
{
    public class OfferNotFoundException : NotFoundException
    {
        public OfferNotFoundException(int id) : base($"Offer with {id} could not found")
        {
        }
    }
}
