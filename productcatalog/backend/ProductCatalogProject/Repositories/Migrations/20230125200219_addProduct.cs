using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repositories.Migrations
{
    public partial class addProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ebcbaf4e-ed6a-4559-80f6-56c092195965");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "efde7dbd-9d22-4478-b533-a19ebe753483");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "10d2825d-4dbc-4180-9104-727ac86f01dc", "a59cd627-f14e-4e27-8392-0630397e6e2f", "Admin", "ADMIN" },
                    { "30b091fb-3e72-46c9-99b4-98a857030320", "6100bf32-ee79-4ea7-8fe2-0651a5ce84b2", "User", "USER" }
                });

            migrationBuilder.UpdateData(
                table: "Offers",
                keyColumn: "OfferId",
                keyValue: 1,
                column: "OfferTime",
                value: new DateTime(2023, 1, 25, 23, 2, 19, 38, DateTimeKind.Local).AddTicks(2862));

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "BrandId", "CategoryId", "ColorId", "ProductDescription", "ProductImage", "ProductIsSold", "ProductName", "ProductOffer", "ProductPrice", "ProductStatus", "UserId", "UsingStatusId" },
                values: new object[,]
                {
                    { 4, 4, 2, 6, "Huawei Matebook D15 Intel Core i7 1195G7 16GB 512GB SSD Windows 11 Home 15.6 FHD Taşınabilir Bilgisayar", "https://productimages.hepsiburada.net/s/349/550/110000357344350.jpg/format:webp", false, "Huawei MateBook D15 Intel Core i7 1195G7 16GB 512GB SSD", false, 17499, true, null, 1 },
                    { 5, 4, 2, 6, "15.6 inçlik güzel IPS TamGörüş Ekranında kaybolun. 87 ekran gövde oranıyla ve sadece 5.3 mm dar çerçevesiyle film izlemek, yaratıcı olmak ya da iş yapmak için birebir.", "https://productimages.hepsiburada.net/s/311/500/110000304047619.jpg", false, "Huawei MateBook D15 Intel Core i3 10110U 8GB 256GB", false, 11250, true, null, 1 },
                    { 6, 2, 2, 2, "MSI Katana GF76 11UD-059XTR Intel Core i7 11800H 16GB 512GB SSD RTX 3050Ti Freedos 17.3 FHD Taşınabilir Bilgisayar", "https://productimages.hepsiburada.net/s/77/1500/110000018935330.jpg", false, "MSI Katana GF76 11UD-059XTR Intel Core i7 11800H 16GB 512GB SSD ", false, 28499, true, null, 1 },
                    { 7, 2, 2, 6, "Ekran Kartı Hafızası6 GBİşletim SistemiWindows 10 Homeİşlemci11375HRam (Sistem Belleği)32 GBGaranti TipiResmi Distribütör Garantiliİşlemci TipiIntel Core i7Harddisk KapasitesiYokEkran Boyutu15,6 inçEkran KartıNvidia GeForce RTX 3060Tüm Özellikler Msı Stealth 15M A11UEK-039XTR İntel Core i7 11375H 32GB 1TB SSD Rtx 3060 Windows 10 Home 15.6 FHD Taşınabilir Bilgisayar MSI", "https://productimages.hepsiburada.net/s/340/1500/110000346881013.jpg", false, "MSI Katana GF76 11UD-059XTR Intel Core i7 11800H 16GB 512GB SSD", false, 44499, true, null, 1 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "10d2825d-4dbc-4180-9104-727ac86f01dc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "30b091fb-3e72-46c9-99b4-98a857030320");

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 7);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ebcbaf4e-ed6a-4559-80f6-56c092195965", "318acd64-a149-4323-9c3c-1f384408e062", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "efde7dbd-9d22-4478-b533-a19ebe753483", "b83275f0-9aef-408c-ad9a-a0b06b19283a", "User", "USER" });

            migrationBuilder.UpdateData(
                table: "Offers",
                keyColumn: "OfferId",
                keyValue: 1,
                column: "OfferTime",
                value: new DateTime(2023, 1, 24, 22, 41, 16, 493, DateTimeKind.Local).AddTicks(4644));
        }
    }
}
