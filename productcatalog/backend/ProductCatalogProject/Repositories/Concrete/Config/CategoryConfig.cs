using Entities.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete.Config
{
    public class CategoryConfig : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.HasKey(x => x.CategoryId);
            builder.Property(x => x.CategoryName).IsRequired();
            builder.Property(x => x.CategoryStatus);

            builder.HasData(
                new Category { CategoryId=1,CategoryName="Telefon",CategoryStatus=true},
                new Category { CategoryId=2,CategoryName="Bilgisayar",CategoryStatus=true},
                new Category { CategoryId=3,CategoryName="Akıllı Saat",CategoryStatus=true}
                );
        }
    }
}
