using AutoMapper;
using Entities.Dtos;
using Entities.Model;

namespace ProductCatalogProject.Profiles
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<ProductDto,Product>().ReverseMap();
            CreateMap<ColorDto,Color>().ReverseMap();
            CreateMap<BrandDto,Brand>().ReverseMap();
            CreateMap<CategoryDto,Category>().ReverseMap();
            CreateMap<DetailDto,ProductDetail>().ReverseMap();
            CreateMap<UserForRegisterDto,User>().ReverseMap();  
            CreateMap<OfferDto,Offer>().ReverseMap();
            CreateMap<UsingStatusDto,UsingStatus>().ReverseMap();   
        }
    }
}
