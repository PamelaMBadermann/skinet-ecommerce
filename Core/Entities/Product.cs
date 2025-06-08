namespace Core.Entities;

public class Product : BaseEntity
{
  public required int Name { get; set; }
  public required int Description { get; set; }
  public int Price { get; set; }
  public required int PictureUrl { get; set; }
  public required int Type { get; set; }
  public required int Brand { get; set; }
  public int QuantityInStock { get; set; }
}
