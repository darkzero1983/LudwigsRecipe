using LudwigsRecipe.Data.DBContext.Models.Identity;

namespace LudwigsRecipe.Data.DBContext.Models
{
	public class RecipeToApplicationUser
	{
		public int RecipeId { get; set; }
		public Recipe Recipe { get; set; }

		public string ApplicationUserId { get; set; }
		public ApplicationUser ApplicationUser { get; set; }
	}
}
