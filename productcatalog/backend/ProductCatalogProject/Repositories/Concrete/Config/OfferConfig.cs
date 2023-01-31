using Entities.Dtos;
using Entities.Model;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete.Config
{
    public class OfferConfig : IEntityTypeConfiguration<Offer>
    {
      

        public void Configure(EntityTypeBuilder<Offer> builder)
        {
            builder.HasKey(x => x.OfferId);
            builder.Property(x => x.ProductId).IsRequired();
            builder.Property(x=>x.OfferPrice).IsRequired();
            builder.Property(x=>x.OfferTime);
            builder.Property(x=>x.UserId);

            builder.HasData(
                new Offer
                {
                    OfferId=1,
                    OfferPrice=1,
                    OfferTime=DateTime.Now,
                    ProductId=1,
                    Email="yakup.0950@gmail.com",
                    UserId= "7344c267-413b-4181-bfa3-96e6d9a25742"

                }
                );
         
            builder.HasOne(x=>x.Product).WithMany(x=>x.Offers).HasForeignKey(x=>x.ProductId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
