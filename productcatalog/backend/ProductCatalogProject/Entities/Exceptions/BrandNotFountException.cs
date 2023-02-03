namespace Entities.Exceptions
{
    public class BrandNotFountException : NotFoundException
    {
        public BrandNotFountException(int id) : base($"Brand with {id} could not found")
        {
        }
  
    }
}
