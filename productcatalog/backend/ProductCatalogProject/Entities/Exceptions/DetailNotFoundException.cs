namespace Entities.Exceptions
{
    public class DetailNotFoundException : NotFoundException
    {
        public DetailNotFoundException(int id) : base($"Detail with{id} could not found")
        {
        }
    }
}
