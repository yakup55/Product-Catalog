﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Repositories.Concrete.Context;

#nullable disable

namespace Repositories.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.12")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Entities.Model.Brand", b =>
                {
                    b.Property<int>("BrandId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BrandId"), 1L, 1);

                    b.Property<string>("BrandName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BrandId");

                    b.ToTable("Brands");

                    b.HasData(
                        new
                        {
                            BrandId = 1,
                            BrandName = "Apple"
                        },
                        new
                        {
                            BrandId = 2,
                            BrandName = "Msi"
                        },
                        new
                        {
                            BrandId = 3,
                            BrandName = "Samsung"
                        },
                        new
                        {
                            BrandId = 4,
                            BrandName = "Huawei"
                        },
                        new
                        {
                            BrandId = 5,
                            BrandName = "Casper"
                        });
                });

            modelBuilder.Entity("Entities.Model.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CategoryId"), 1L, 1);

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("CategoryStatus")
                        .HasColumnType("bit");

                    b.HasKey("CategoryId");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            CategoryId = 1,
                            CategoryName = "Telefon",
                            CategoryStatus = true
                        },
                        new
                        {
                            CategoryId = 2,
                            CategoryName = "Bilgisayar",
                            CategoryStatus = true
                        },
                        new
                        {
                            CategoryId = 3,
                            CategoryName = "Akıllı Saat",
                            CategoryStatus = true
                        });
                });

            modelBuilder.Entity("Entities.Model.Color", b =>
                {
                    b.Property<int>("ColorId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ColorId"), 1L, 1);

                    b.Property<string>("ColorName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ColorId");

                    b.ToTable("Colors");

                    b.HasData(
                        new
                        {
                            ColorId = 1,
                            ColorName = "Sarı"
                        },
                        new
                        {
                            ColorId = 2,
                            ColorName = "Kırmızı"
                        },
                        new
                        {
                            ColorId = 3,
                            ColorName = "Siyah"
                        },
                        new
                        {
                            ColorId = 4,
                            ColorName = "Mavi"
                        },
                        new
                        {
                            ColorId = 5,
                            ColorName = "Yeşil"
                        });
                });

            modelBuilder.Entity("Entities.Model.Offer", b =>
                {
                    b.Property<int>("OfferId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OfferId"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsAccepted")
                        .HasColumnType("bit");

                    b.Property<int>("OfferPrice")
                        .HasColumnType("int");

                    b.Property<DateTime?>("OfferTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("OfferId");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("Offers");

                    b.HasData(
                        new
                        {
                            OfferId = 1,
                            Email = "yakup.0950@gmail.com",
                            IsAccepted = false,
                            OfferPrice = 1,
                            OfferTime = new DateTime(2023, 1, 30, 17, 23, 50, 222, DateTimeKind.Local).AddTicks(4453),
                            ProductId = 1,
                            UserId = "7344c267-413b-4181-bfa3-96e6d9a25742"
                        });
                });

            modelBuilder.Entity("Entities.Model.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProductId"), 1L, 1);

                    b.Property<int>("BrandId")
                        .HasColumnType("int");

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<int>("ColorId")
                        .HasColumnType("int");

                    b.Property<string>("ProductDescription")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("ProductImage")
                        .IsRequired()
                        .HasMaxLength(400)
                        .HasColumnType("nvarchar(400)");

                    b.Property<bool>("ProductIsSold")
                        .HasColumnType("bit");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<bool>("ProductOffer")
                        .HasColumnType("bit");

                    b.Property<int>("ProductPrice")
                        .HasColumnType("int");

                    b.Property<bool>("ProductStatus")
                        .HasColumnType("bit");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("UsingStatusId")
                        .HasColumnType("int");

                    b.HasKey("ProductId");

                    b.HasIndex("BrandId");

                    b.HasIndex("CategoryId");

                    b.HasIndex("ColorId");

                    b.HasIndex("UserId");

                    b.HasIndex("UsingStatusId");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            ProductId = 1,
                            BrandId = 1,
                            CategoryId = 1,
                            ColorId = 2,
                            ProductDescription = "dfdffddf",
                            ProductImage = "https://productimages.hepsiburada.net/s/189/1500/110000155170656.jpg",
                            ProductIsSold = false,
                            ProductName = "iPhone 13 128 GB Apple",
                            ProductOffer = true,
                            ProductPrice = 27599,
                            ProductStatus = true,
                            UsingStatusId = 1
                        },
                        new
                        {
                            ProductId = 2,
                            BrandId = 2,
                            CategoryId = 2,
                            ColorId = 2,
                            ProductDescription = "dfdffddf",
                            ProductImage = "https://productimages.hepsiburada.net/s/179/500/110000143302073.jpg",
                            ProductIsSold = false,
                            ProductName = "MSI GF63 Thin 11UC-616XTR Intel Core i7 11800H 8GB 512GB SSD RTX3050",
                            ProductOffer = true,
                            ProductPrice = 25875,
                            ProductStatus = true,
                            UsingStatusId = 1
                        },
                        new
                        {
                            ProductId = 3,
                            BrandId = 4,
                            CategoryId = 3,
                            ColorId = 2,
                            ProductDescription = "dfdffddf",
                            ProductImage = "https://productimages.hepsiburada.net/s/307/500/110000299915353.jpg",
                            ProductIsSold = false,
                            ProductName = "Huawei Watch Gt3 Pro 46MM Titanyum Kasa - Siyah Huawei",
                            ProductOffer = true,
                            ProductPrice = 5990,
                            ProductStatus = true,
                            UsingStatusId = 1
                        },
                        new
                        {
                            ProductId = 4,
                            BrandId = 4,
                            CategoryId = 2,
                            ColorId = 6,
                            ProductDescription = "Huawei Matebook D15 Intel Core i7 1195G7 16GB 512GB SSD Windows 11 Home 15.6 FHD Taşınabilir Bilgisayar",
                            ProductImage = "https://productimages.hepsiburada.net/s/349/550/110000357344350.jpg/format:webp",
                            ProductIsSold = false,
                            ProductName = "Huawei MateBook D15 Intel Core i7 1195G7 16GB 512GB SSD",
                            ProductOffer = true,
                            ProductPrice = 17499,
                            ProductStatus = true,
                            UsingStatusId = 1
                        },
                        new
                        {
                            ProductId = 5,
                            BrandId = 4,
                            CategoryId = 2,
                            ColorId = 6,
                            ProductDescription = "15.6 inçlik güzel IPS TamGörüş Ekranında kaybolun. 87 ekran gövde oranıyla ve sadece 5.3 mm dar çerçevesiyle film izlemek, yaratıcı olmak ya da iş yapmak için birebir.",
                            ProductImage = "https://productimages.hepsiburada.net/s/311/500/110000304047619.jpg",
                            ProductIsSold = false,
                            ProductName = "Huawei MateBook D15 Intel Core i3 10110U 8GB 256GB",
                            ProductOffer = true,
                            ProductPrice = 11250,
                            ProductStatus = true,
                            UsingStatusId = 1
                        },
                        new
                        {
                            ProductId = 6,
                            BrandId = 2,
                            CategoryId = 2,
                            ColorId = 2,
                            ProductDescription = "MSI Katana GF76 11UD-059XTR Intel Core i7 11800H 16GB 512GB SSD RTX 3050Ti Freedos 17.3 FHD Taşınabilir Bilgisayar",
                            ProductImage = "https://productimages.hepsiburada.net/s/77/1500/110000018935330.jpg",
                            ProductIsSold = false,
                            ProductName = "MSI Katana GF76 11UD-059XTR Intel Core i7 11800H 16GB 512GB SSD ",
                            ProductOffer = true,
                            ProductPrice = 28499,
                            ProductStatus = true,
                            UsingStatusId = 1
                        },
                        new
                        {
                            ProductId = 7,
                            BrandId = 2,
                            CategoryId = 2,
                            ColorId = 6,
                            ProductDescription = "Ekran Kartı Hafızası6 GBİşletim SistemiWindows 10 Homeİşlemci11375HRam (Sistem Belleği)32 GBGaranti TipiResmi Distribütör Garantiliİşlemci TipiIntel Core i7Harddisk KapasitesiYokEkran Boyutu15,6 inçEkran KartıNvidia GeForce RTX 3060Tüm Özellikler Msı Stealth 15M A11UEK-039XTR İntel Core i7 11375H 32GB 1TB SSD Rtx 3060 Windows 10 Home 15.6 FHD Taşınabilir Bilgisayar MSI",
                            ProductImage = "https://productimages.hepsiburada.net/s/340/1500/110000346881013.jpg",
                            ProductIsSold = false,
                            ProductName = "MSI Katana GF76 11UD-059XTR Intel Core i7 11800H 16GB 512GB SSD",
                            ProductOffer = true,
                            ProductPrice = 44499,
                            ProductStatus = true,
                            UsingStatusId = 1
                        },
                        new
                        {
                            ProductId = 8,
                            BrandId = 1,
                            CategoryId = 2,
                            ColorId = 6,
                            ProductDescription = "Yeni nesil bambaşka.",
                            ProductImage = "https://productimages.hepsiburada.net/s/337/550/110000314161726.jpg/format:webp",
                            ProductIsSold = false,
                            ProductName = "Apple MacBook Pro M2 Çip",
                            ProductOffer = true,
                            ProductPrice = 39999,
                            ProductStatus = true,
                            UsingStatusId = 1
                        },
                        new
                        {
                            ProductId = 9,
                            BrandId = 1,
                            CategoryId = 2,
                            ColorId = 6,
                            ProductDescription = "Yeni nesil bambaşka.",
                            ProductImage = "https://productimages.hepsiburada.net/s/131/1500/110000081537720.jpg",
                            ProductIsSold = false,
                            ProductName = "Apple MacBook M1 Pro",
                            ProductOffer = true,
                            ProductPrice = 51780,
                            ProductStatus = true,
                            UsingStatusId = 1
                        },
                        new
                        {
                            ProductId = 10,
                            BrandId = 3,
                            CategoryId = 2,
                            ColorId = 6,
                            ProductDescription = "Yeni nesil bambaşka.",
                            ProductImage = "https://productimages.hepsiburada.net/s/308/500/110000300384401.jpg",
                            ProductIsSold = false,
                            ProductName = "Samsung Galaxy Book2",
                            ProductOffer = true,
                            ProductPrice = 36575,
                            ProductStatus = true,
                            UsingStatusId = 1
                        });
                });

            modelBuilder.Entity("Entities.Model.ProductDetail", b =>
                {
                    b.Property<int>("DetailId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DetailId"), 1L, 1);

                    b.Property<string>("DetailExplanation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.HasKey("DetailId");

                    b.HasIndex("ProductId")
                        .IsUnique();

                    b.ToTable("ProductDetails");
                });

            modelBuilder.Entity("Entities.Model.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("UserStatus")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("Entities.Model.UsingStatus", b =>
                {
                    b.Property<int>("UsingStatusId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UsingStatusId"), 1L, 1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UsingStatusId");

                    b.ToTable("UsingStatuses");

                    b.HasData(
                        new
                        {
                            UsingStatusId = 1,
                            Name = "Sıfır"
                        },
                        new
                        {
                            UsingStatusId = 2,
                            Name = "İkinci El"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "af1a02e6-8989-4db1-8761-b58ac0349bf0",
                            ConcurrencyStamp = "45c40b43-0e8f-48c6-8e7d-d2d3624f6316",
                            Name = "Admin",
                            NormalizedName = "ADMIN"
                        },
                        new
                        {
                            Id = "e3c9ef09-eca3-466b-b5f6-9e1d6e871386",
                            ConcurrencyStamp = "1d8fe9f2-3b8a-43ef-a2c2-926da03ce5e3",
                            Name = "User",
                            NormalizedName = "USER"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("Entities.Model.Offer", b =>
                {
                    b.HasOne("Entities.Model.Product", "Product")
                        .WithMany("Offers")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entities.Model.User", "User")
                        .WithMany("Offers")
                        .HasForeignKey("UserId");

                    b.Navigation("Product");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Entities.Model.Product", b =>
                {
                    b.HasOne("Entities.Model.Brand", "Brand")
                        .WithMany("Products")
                        .HasForeignKey("BrandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entities.Model.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entities.Model.Color", "Color")
                        .WithMany("Products")
                        .HasForeignKey("ColorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entities.Model.User", "User")
                        .WithMany("Products")
                        .HasForeignKey("UserId");

                    b.HasOne("Entities.Model.UsingStatus", "UsingStatus")
                        .WithMany("Products")
                        .HasForeignKey("UsingStatusId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Brand");

                    b.Navigation("Category");

                    b.Navigation("Color");

                    b.Navigation("User");

                    b.Navigation("UsingStatus");
                });

            modelBuilder.Entity("Entities.Model.ProductDetail", b =>
                {
                    b.HasOne("Entities.Model.Product", "Product")
                        .WithOne("ProductDetail")
                        .HasForeignKey("Entities.Model.ProductDetail", "ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Entities.Model.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Entities.Model.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entities.Model.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Entities.Model.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Entities.Model.Brand", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("Entities.Model.Category", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("Entities.Model.Color", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("Entities.Model.Product", b =>
                {
                    b.Navigation("Offers");

                    b.Navigation("ProductDetail")
                        .IsRequired();
                });

            modelBuilder.Entity("Entities.Model.User", b =>
                {
                    b.Navigation("Offers");

                    b.Navigation("Products");
                });

            modelBuilder.Entity("Entities.Model.UsingStatus", b =>
                {
                    b.Navigation("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
