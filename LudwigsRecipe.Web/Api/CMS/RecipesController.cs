using LudwigsRecipe.Service.Services.Recipe;
using LudwigsRecipe.Service.Models.Recipe;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace LudwigsRecipe.Web.Api.Recipe
{
	[Authorize(Roles = "Admin, Author")]
	[Route("api/cms/[controller]")]
	public class RecipesController : Controller
	{
		#region ctor
		private readonly IRecipeService _recipeService;

		public RecipesController(IRecipeService recipeService)
		{
			_recipeService = recipeService;
		}
		#endregion

		// GET: api/RecipeOverview
		[HttpGet]
		public RecipeOverviewViewModel Get(int page)
		{
			RecipeOverviewViewModel recipes = null;
			if (page == 0)
			{
				page = 1;
			}
			recipes = _recipeService.LoadRecipes(page);

			return recipes;
		}
	}
}
