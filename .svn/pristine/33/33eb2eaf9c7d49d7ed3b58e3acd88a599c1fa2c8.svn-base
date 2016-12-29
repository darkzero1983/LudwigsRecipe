using LudwigsRecipe.Service.Services.Recipe;
using LudwigsRecipe.Service.Models.Recipe;
using Microsoft.AspNetCore.Mvc;

namespace LudwigsRecipe.Web.Api.Recipe
{

	[Route("api/[controller]")]
	public class RecipeOverviewController : Controller
	{
		#region ctor
		private readonly IRecipeService _recipeService;

		public RecipeOverviewController(IRecipeService recipeService)
		{
			_recipeService = recipeService;
		}
		#endregion

		// GET: api/RecipeOverview
		[HttpGet]
		public RecipeOverviewViewModel Get(int page, string categoryUrl, string subCategoryUrl)
		{
			RecipeOverviewViewModel recipes = null;
			if (page == 0)
			{
				page = 1;
			}
			if (!string.IsNullOrWhiteSpace(subCategoryUrl) && subCategoryUrl != "null")
			{
				recipes = _recipeService.LoadRecipesFromSubCategories(page, User.IsInRole("Friend"), subCategoryUrl);
			}
			else if (!string.IsNullOrWhiteSpace(categoryUrl) && categoryUrl != "null")
			{
				recipes = _recipeService.LoadRecipesFromCategories(page, User.IsInRole("Friend"), categoryUrl);
			}
			else
			{
				recipes = _recipeService.LoadTopRecipes(page, User.IsInRole("Friend"));
			}

			return recipes;
		}
	}
}
