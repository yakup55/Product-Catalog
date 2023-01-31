using Entities.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dtos
{
    public class OfferDto
    {
        public int OfferPrice { get; set; }
        public bool IsAccepted { get; set; }
        public DateTime? OfferTime { get; set; }
        public string UserId { get; set; }
        public int ProductId { get; set; }

        public string Email { get; set; }

    }
}
