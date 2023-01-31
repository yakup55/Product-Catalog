namespace Entities.Exceptions
{
    public class ColorNotFoundException : NotFoundException
    {
        public ColorNotFoundException(int id) : base($"Color with {id} could not found")
        {
        }
    }
}
