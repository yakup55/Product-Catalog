using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repositories.Migrations
{
    public partial class add2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "45f72c74-a1d7-4160-bbb3-5f45d5607fbf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f1774885-2bba-4b79-b79f-c768c4403073");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Products",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "18aff2d6-578a-444f-bb60-1bf58e141205", "66d90baf-cfec-422d-b747-5b634a99c48f", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "585c580f-0a83-45e5-b5a0-bce988f59ace", "7c768c1f-0133-4c50-b3e3-7579371b5528", "User", "USER" });

            migrationBuilder.UpdateData(
                table: "Offers",
                keyColumn: "OfferId",
                keyValue: 1,
                columns: new[] { "OfferTime", "UserId" },
                values: new object[] { new DateTime(2023, 1, 24, 16, 46, 49, 870, DateTimeKind.Local).AddTicks(9634), "7344c267-413b-4181-bfa3-96e6d9a25742" });

            migrationBuilder.CreateIndex(
                name: "IX_Products_UserId",
                table: "Products",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_AspNetUsers_UserId",
                table: "Products",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_AspNetUsers_UserId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_UserId",
                table: "Products");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "18aff2d6-578a-444f-bb60-1bf58e141205");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "585c580f-0a83-45e5-b5a0-bce988f59ace");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Products");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "45f72c74-a1d7-4160-bbb3-5f45d5607fbf", "a63638a4-3306-44fc-a7f8-9b060ea8fa31", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "f1774885-2bba-4b79-b79f-c768c4403073", "317adc5b-8fe0-4fc0-8bb4-de2a59e0ac91", "User", "USER" });

            migrationBuilder.UpdateData(
                table: "Offers",
                keyColumn: "OfferId",
                keyValue: 1,
                columns: new[] { "OfferTime", "UserId" },
                values: new object[] { new DateTime(2023, 1, 24, 14, 24, 56, 768, DateTimeKind.Local).AddTicks(3727), null });
        }
    }
}
