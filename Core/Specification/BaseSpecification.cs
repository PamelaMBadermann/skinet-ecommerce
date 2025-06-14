using System.Linq.Expressions;
using Core.Interfaces;

namespace Core.Specification;

public class BaseSpecification<T>(Expression<Func<T, bool>> criteria) : ISpecification<T>
{
  private readonly Expression<Func<T, bool>> criteria = criteria;

  public Expression<Func<T, bool>> Criteria => criteria;
}
