using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class ProductDetail
    {
        [Key]
        [Required] 
        public int DetailId { get; set; }
        public string DetailExplanation { get; set; }

        public int ProductId { get; set; }
        public Product? Product { get; set; }
    }
}
