using Microsoft.AspNetCore.Mvc;
using LudwigsRecipe.Service.Services.Recipe;
using LudwigsRecipe.Service.Models.Recipe;

namespace LudwigsRecipe.Web.Api.Recipe
{
	[Route("api/[controller]")]
	public class RecipeDetailController : Controller
	{
		#region ctor
		private readonly IRecipeService _recipeService;

		public RecipeDetailController(IRecipeService recipeService)
		{
			_recipeService = recipeService;
		}
		#endregion

		[HttpGet("{id}")]
		public RecipeDetailViewModel Get(int id)
		{
			RecipeDetailViewModel recipe = _recipeService.LoadRecipe(id, User.IsInRole("Friend"));
			return recipe;
		}
	}
}
