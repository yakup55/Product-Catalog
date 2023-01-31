using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repositories.Migrations
{
    public partial class add3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "47fd09b6-48d3-4321-a1e7-e83ec9305845");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bd420aff-16fa-4aa0-9668-39da1bd85b53");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "af1a02e6-8989-4db1-8761-b58ac0349bf0", "45c40b43-0e8f-48c6-8e7d-d2d3624f6316", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e3c9ef09-eca3-466b-b5f6-9e1d6e871386", "1d8fe9f2-3b8a-43ef-a2c2-926da03ce5e3", "User", "USER" });

            migrationBuilder.UpdateData(
                table: "Offers",
                keyColumn: "OfferId",
                keyValue: 1,
                column: "OfferTime",
                value: new DateTime(2023, 1, 30, 17, 23, 50, 222, DateTimeKind.Local).AddTicks(4453));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "af1a02e6-8989-4db1-8761-b58ac0349bf0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e3c9ef09-eca3-466b-b5f6-9e1d6e871386");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "47fd09b6-48d3-4321-a1e7-e83ec9305845", "325b2d04-3ea9-465a-bfce-6a8378dc2b76", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "bd420aff-16fa-4aa0-9668-39da1bd85b53", "696441e2-6764-4f71-b7be-304f43b467f7", "User", "USER" });

            migrationBuilder.UpdateData(
                table: "Offers",
                keyColumn: "OfferId",
                keyValue: 1,
                column: "OfferTime",
                value: new DateTime(2023, 1, 25, 23, 11, 6, 314, DateTimeKind.Local).AddTicks(6388));
        }
    }
}
