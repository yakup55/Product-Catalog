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
    public class UsingStatusConfig : IEntityTypeConfiguration<UsingStatus>
    {
        public void Configure(EntityTypeBuilder<UsingStatus> builder)
        {
            builder.HasKey(x => x.UsingStatusId);
            builder.Property(x=>x.Name).IsRequired();

            builder.HasData(
                new UsingStatus()
                {
                    UsingStatusId = 1,
                    Name= "Sıfır",
                },
                 new UsingStatus()
                 {
                     UsingStatusId = 2,
                     Name = "İkinci El",
                 }
                );
        }
    }
}
