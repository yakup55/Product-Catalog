using Entities.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Repositories.Concrete.Config
{
    public class ColorConfig : IEntityTypeConfiguration<Color>
    {
        public void Configure(EntityTypeBuilder<Color> builder)
        {
            builder.HasKey(x => x.ColorId);
            builder.Property(x => x.ColorName).IsRequired();

            builder.HasData(
                new Color { ColorId = 1, ColorName="Sarı" },
                new Color { ColorId = 2, ColorName="Kırmızı" },
                new Color { ColorId = 3, ColorName="Siyah" },
                new Color { ColorId = 4, ColorName="Mavi" },
                new Color { ColorId = 5, ColorName="Yeşil" }
                ) ;
        }
    }
}
