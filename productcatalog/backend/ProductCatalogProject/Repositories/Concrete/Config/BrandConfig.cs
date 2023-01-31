using Entities.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Repositories.Concrete.Config
{
    public class BrandConfig : IEntityTypeConfiguration<Brand>
    {
        public void Configure(EntityTypeBuilder<Brand> builder)
        {
           builder.HasKey(x => x.BrandId);
            builder.Property(x=>x.BrandName).IsRequired();

            builder.HasData(
                new Brand { BrandId = 1, BrandName = "Apple" },
                new Brand { BrandId = 2, BrandName = "Msi" },
                new Brand { BrandId = 3, BrandName = "Samsung" },
                new Brand { BrandId = 4, BrandName = "Huawei" },
                new Brand { BrandId = 5, BrandName = "Casper" }
                );
          
        }
    }
}
