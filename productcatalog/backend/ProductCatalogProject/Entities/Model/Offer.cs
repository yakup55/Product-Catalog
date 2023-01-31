using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class Offer
    {
        [Key]
        [Required]
        public int OfferId { get; set; }
        public int OfferPrice { get; set; }
        public bool IsAccepted { get; set; }
        public DateTime? OfferTime { get; set; }


        public int ProductId { get; set; }
        public Product? Product { get; set; }

        public string? UserId { get; set; }
        public User? User { get; set; }

        public string Email { get; set; }




    }
}
