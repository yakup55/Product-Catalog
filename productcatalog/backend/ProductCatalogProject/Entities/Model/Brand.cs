using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class Brand
    {
        [Key]
        [Required] public int BrandId { get; set; }
        [Required] public string BrandName { get; set; }

        public ICollection<Product>? Products { get; set; }
    }
}
