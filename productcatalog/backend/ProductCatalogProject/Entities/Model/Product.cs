using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class Product
    {
        [Key]
        [Required]
        public int ProductId { get; set; }
        [Required]
        [MaxLength(100)]
        public string ProductName { get; set; }
        [Required]
        [MaxLength(500)]
        public string ProductDescription { get; set; }
        [Required]
        public int ProductPrice { get; set; }
        public bool ProductOffer { get; set; }
        public bool ProductStatus { get; set; }
        public bool ProductIsSold { get; set; }
        [Required]
        [MaxLength(400)]
        public string ProductImage { get; set; }

        public int CategoryId { get; set; }
        public Category? Category { get; set; }

        public int ColorId { get; set; }
        public Color? Color { get; set; }

        public int BrandId { get; set; }
        public Brand? Brand { get; set; }

        public int UsingStatusId { get; set; }
        public UsingStatus? UsingStatus { get; set; }

        public ProductDetail ProductDetail { get; set; }
        public ICollection<Offer> Offers { get; set; }


        public string? UserId { get; set; }
        public User User { get; set; }
    }
}
