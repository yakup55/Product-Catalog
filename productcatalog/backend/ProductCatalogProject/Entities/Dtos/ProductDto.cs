using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dtos
{
    public class ProductDto
    {
        public string ProductName { get; set; }
        public int ProductPrice { get; set; }
        public string ProductDescription { get; set; }
        public string ProductImage { get; set; }
        public bool ProductStatus { get; set; }
        public bool ProductOffer { get; set; }
        public bool ProductIsSold { get; set; }

        public int CategoryId { get; set; }
        public int ColorId { get; set; }
        public int BrandId { get; set; }
        public int usingStatusId { get; set; }
        public string UserId { get; set; }

    }
}
