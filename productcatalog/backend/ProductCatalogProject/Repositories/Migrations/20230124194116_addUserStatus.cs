using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repositories.Migrations
{
    public partial class addUserStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "18aff2d6-578a-444f-bb60-1bf58e141205");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "585c580f-0a83-45e5-b5a0-bce988f59ace");

            migrationBuilder.AddColumn<bool>(
                name: "UserStatus",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ebcbaf4e-ed6a-4559-80f6-56c092195965");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "efde7dbd-9d22-4478-b533-a19ebe753483");

            migrationBuilder.DropColumn(
                name: "UserStatus",
                table: "AspNetUsers");

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
                column: "OfferTime",
                value: new DateTime(2023, 1, 24, 16, 46, 49, 870, DateTimeKind.Local).AddTicks(9634));
        }
    }
}
