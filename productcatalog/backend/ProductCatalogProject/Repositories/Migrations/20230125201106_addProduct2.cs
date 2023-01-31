using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repositories.Migrations
{
    public partial class addProduct2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "10d2825d-4dbc-4180-9104-727ac86f01dc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "30b091fb-3e72-46c9-99b4-98a857030320");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "47fd09b6-48d3-4321-a1e7-e83ec9305845", "325b2d04-3ea9-465a-bfce-6a8378dc2b76", "Admin", "ADMIN" },
                    { "bd420aff-16fa-4aa0-9668-39da1bd85b53", "696441e2-6764-4f71-b7be-304f43b467f7", "User", "USER" }
                });

            migrationBuilder.UpdateData(
                table: "Offers",
                keyColumn: "OfferId",
                keyValue: 1,
                column: "OfferTime",
                value: new DateTime(2023, 1, 25, 23, 11, 6, 314, DateTimeKind.Local).AddTicks(6388));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 1,
                column: "ProductOffer",
                value: true);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 2,
                column: "ProductOffer",
                value: true);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 3,
                column: "ProductOffer",
                value: true);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 4,
                column: "ProductOffer",
                value: true);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 5,
                column: "ProductOffer",
                value: true);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 6,
                column: "ProductOffer",
                value: true);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 7,
                column: "ProductOffer",
                value: true);

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "BrandId", "CategoryId", "ColorId", "ProductDescription", "ProductImage", "ProductIsSold", "ProductName", "ProductOffer", "ProductPrice", "ProductStatus", "UserId", "UsingStatusId" },
                values: new object[,]
                {
                    { 8, 1, 2, 6, "Yeni nesil bambaşka.", "https://productimages.hepsiburada.net/s/337/550/110000314161726.jpg/format:webp", false, "Apple MacBook Pro M2 Çip", true, 39999, true, null, 1 },
                    { 9, 1, 2, 6, "Yeni nesil bambaşka.", "https://productimages.hepsiburada.net/s/131/1500/110000081537720.jpg", false, "Apple MacBook M1 Pro", true, 51780, true, null, 1 },
                    { 10, 3, 2, 6, "Yeni nesil bambaşka.", "https://productimages.hepsiburada.net/s/308/500/110000300384401.jpg", false, "Samsung Galaxy Book2", true, 36575, true, null, 1 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "47fd09b6-48d3-4321-a1e7-e83ec9305845");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bd420aff-16fa-4aa0-9668-39da1bd85b53");

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 10);

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

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 1,
                column: "ProductOffer",
                value: false);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 2,
                column: "ProductOffer",
                value: false);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 3,
                column: "ProductOffer",
                value: false);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 4,
                column: "ProductOffer",
                value: false);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 5,
                column: "ProductOffer",
                value: false);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 6,
                column: "ProductOffer",
                value: false);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 7,
                column: "ProductOffer",
                value: false);
        }
    }
}
