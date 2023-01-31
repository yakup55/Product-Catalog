using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class UsingStatus
    {
        [Key]
        [Required]
        public int UsingStatusId { get; set; }
        public string Name { get; set; }

        public ICollection<Product>? Products { get; set; }
    }
}
