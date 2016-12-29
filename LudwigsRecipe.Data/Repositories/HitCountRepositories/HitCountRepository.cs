using LudwigsRecipe.Data.DataModels.HitCount;
using LudwigsRecipe.Data.DBContext;
using LudwigsRecipe.Data.DBContext.Models;
using LudwigsRecipe.Data.DBContext.Models.Identity;
using System.Linq;

namespace LudwigsRecipe.Data.Repositories.HitCountRepositories
{
	public class HitCountRepository : IHitCountRepository
	{
		#region ctor
		ApplicationDbContext ctx;

		public HitCountRepository(ApplicationDbContext applicationDbContext)
		{
			ctx = applicationDbContext;
		}
		#endregion

		public void AddHitCount(IHitCountData hitCountData)
		{
			Recipe recipe = null;
			if(hitCountData.RecipeId != 0)
			{
				recipe = ctx.Recipes.FirstOrDefault(x => x.Id == hitCountData.RecipeId);
			}
			ApplicationUser user = null;
			if (!string.IsNullOrEmpty(hitCountData.UserName))
			{
				user = ctx.Users.FirstOrDefault(x => x.UserName == hitCountData.UserName);
			}

			HitCount hitCount = new HitCount()
			{
				HitDate = hitCountData.HitDate,
				Ip = hitCountData.Ip,
				Url = hitCountData.Url,
				User = user,
				Recipe = recipe
			};
			ctx.HitCounts.Add(hitCount);
			ctx.SaveChanges();
		}
	}
}
