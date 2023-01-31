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
    public class ProductConfig : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.HasKey(x => x.ProductId);
            builder.Property(x => x.ProductName).IsRequired();
            builder.Property(x => x.ProductImage).IsRequired();
            builder.Property(x => x.ProductPrice).IsRequired();
            builder.Property(x => x.ProductStatus);
            builder.Property(x => x.ProductOffer);
            builder.Property(x => x.ProductIsSold);
            builder.Property(x => x.ProductDescription).IsRequired();
            builder.Property(x => x.UsingStatusId);
            builder.Property(x => x.UserId);


            builder.HasData(
                new Product
                {
                    ProductId = 1,
                    ColorId = 2,
                    BrandId = 1,
                    CategoryId = 1,
                    ProductPrice = 27599,
                    ProductName = "iPhone 13 128 GB Apple",
                    ProductDescription = "dfdffddf",
                    ProductStatus = true,
                    ProductOffer = true,
                    ProductImage = "https://productimages.hepsiburada.net/s/189/1500/110000155170656.jpg",
                    UsingStatusId = 1
                },
                new Product
                {
                    ProductId = 2
                ,

                    ColorId = 2
                ,
                    BrandId = 2,
                    CategoryId = 2,
                    ProductPrice = 25875,
                    ProductName = "MSI GF63 Thin 11UC-616XTR Intel Core i7 11800H 8GB 512GB SSD RTX3050",
                    ProductDescription = "dfdffddf",
                    ProductStatus = true,
                    ProductOffer = true,
                    ProductImage = "https://productimages.hepsiburada.net/s/179/500/110000143302073.jpg",
                    UsingStatusId = 1
                },

                new Product
                {
                    ProductId = 3
                ,
                    ColorId = 2
                ,
                    BrandId = 4,
                    CategoryId = 3,
                    ProductPrice = 5990,
                    ProductName = "Huawei Watch Gt3 Pro 46MM Titanyum Kasa - Siyah Huawei",
                    ProductDescription = "dfdffddf",
                    ProductStatus = true,
                    ProductOffer = true,
                    ProductImage = "https://productimages.hepsiburada.net/s/307/500/110000299915353.jpg",
                    UsingStatusId = 1
                },

                 new Product
                 {
                     ProductId = 4
            ,
                     ColorId = 6
            ,
                     BrandId = 4,
                     CategoryId = 2,
                     ProductPrice = 17499,
                     ProductName = "Huawei MateBook D15 Intel Core i7 1195G7 16GB 512GB SSD",
                     ProductDescription = "Huawei Matebook D15 Intel Core i7 1195G7 16GB 512GB SSD Windows 11 Home 15.6 FHD Taşınabilir Bilgisayar",
                     ProductStatus = true,
                     ProductOffer = true,
                     ProductImage = "https://productimages.hepsiburada.net/s/349/550/110000357344350.jpg/format:webp",
                     UsingStatusId = 1
                 },
                 new Product
                 {
                     ProductId = 5
            ,
                     ColorId = 6
            ,
                     BrandId = 4,
                     CategoryId = 2,
                     ProductPrice = 11250,
                     ProductName = "Huawei MateBook D15 Intel Core i3 10110U 8GB 256GB",
                     ProductDescription = "15.6 inçlik güzel IPS TamGörüş Ekranında kaybolun. 87 ekran gövde oranıyla ve sadece 5.3 mm dar çerçevesiyle film izlemek, yaratıcı olmak ya da iş yapmak için birebir.",
                     ProductStatus = true,
                     ProductOffer = true,
                     ProductImage = "https://productimages.hepsiburada.net/s/311/500/110000304047619.jpg",
                     UsingStatusId = 1
                 },
                 new Product
                 {
                     ProductId = 6
                ,

                     ColorId = 2
                ,
                     BrandId = 2,
                     CategoryId = 2,
                     ProductPrice = 28499,
                     ProductName = "MSI Katana GF76 11UD-059XTR Intel Core i7 11800H 16GB 512GB SSD ",
                     ProductDescription = "MSI Katana GF76 11UD-059XTR Intel Core i7 11800H 16GB 512GB SSD RTX 3050Ti Freedos 17.3 FHD Taşınabilir Bilgisayar",
                     ProductStatus = true,
                     ProductOffer = true,
                     ProductImage = "https://productimages.hepsiburada.net/s/77/1500/110000018935330.jpg",
                     UsingStatusId = 1
                 },
                    new Product
                    {
                        ProductId = 7
                ,

                        ColorId = 6
                ,
                        BrandId = 2,
                        CategoryId = 2,
                        ProductPrice = 44499,
                        ProductDescription = "Ekran Kartı Hafızası6 GBİşletim SistemiWindows 10 Homeİşlemci11375HRam (Sistem Belleği)32 GBGaranti TipiResmi Distribütör Garantiliİşlemci TipiIntel Core i7Harddisk KapasitesiYokEkran Boyutu15,6 inçEkran KartıNvidia GeForce RTX 3060Tüm Özellikler Msı Stealth 15M A11UEK-039XTR İntel Core i7 11375H 32GB 1TB SSD Rtx 3060 Windows 10 Home 15.6 FHD Taşınabilir Bilgisayar MSI",
                        ProductName = "MSI Katana GF76 11UD-059XTR Intel Core i7 11800H 16GB 512GB SSD",
                        ProductStatus = true,
                        ProductOffer = true,
                        ProductImage = "https://productimages.hepsiburada.net/s/340/1500/110000346881013.jpg",
                        UsingStatusId = 1
                    },
                      new Product
                      {
                          ProductId = 8,
                          ColorId = 6,
                          BrandId = 1,
                          CategoryId = 2,
                          ProductPrice = 39999,
                          ProductName = "Apple MacBook Pro M2 Çip",
                          ProductDescription = "Yeni nesil bambaşka.",
                          ProductStatus = true,
                          ProductOffer = true,
                          ProductImage = "https://productimages.hepsiburada.net/s/337/550/110000314161726.jpg/format:webp",
                          UsingStatusId = 1
                      },
                        new Product
                        {
                            ProductId = 9,
                            ColorId = 6,
                            BrandId = 1,
                            CategoryId = 2,
                            ProductPrice = 51780,
                            ProductName = "Apple MacBook M1 Pro",
                            ProductDescription = "Yeni nesil bambaşka.",
                            ProductStatus = true,
                            ProductOffer = true,
                            ProductImage = "https://productimages.hepsiburada.net/s/131/1500/110000081537720.jpg",
                            UsingStatusId = 1
                        },
                         new Product
                         {
                             ProductId = 10,
                             ColorId = 6,
                             BrandId = 3,
                             CategoryId = 2,
                             ProductPrice = 36575,
                             ProductName = "Samsung Galaxy Book2",
                             ProductDescription = "Yeni nesil bambaşka.",
                             ProductStatus = true,
                             ProductOffer = true,
                             ProductImage = "https://productimages.hepsiburada.net/s/308/500/110000300384401.jpg",
                             UsingStatusId = 1
                         }
                );




            builder.HasOne(x => x.Category).WithMany(x => x.Products).HasForeignKey(x => x.CategoryId).OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(x => x.Color).WithMany(x => x.Products).HasForeignKey(x => x.ColorId).OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(x => x.Brand).WithMany(x => x.Products).HasForeignKey(x => x.BrandId).OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(x => x.UsingStatus).WithMany(x => x.Products).HasForeignKey(x => x.UsingStatusId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
