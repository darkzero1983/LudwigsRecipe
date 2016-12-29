using LudwigsRecipe.Service.Models.Navigation;
using LudwigsRecipe.Service.Services.Recipe;
using Microsoft.AspNetCore.Mvc;

namespace LudwigsRecipe.Web.Api.Recipe
{
	[Route("api/Recipe/[controller]")]
	public class SearchController : Controller
	{
		#region ctor
		private readonly IRecipeService _recipeService;

		public SearchController(IRecipeService recipeService)
		{
			_recipeService = recipeService;
		}
		#endregion

		[HttpPost]
		public SearchResultViewModel Post([FromBody]string term)
		{
			return _recipeService.SearchRecipes(term, User.IsInRole("Friend"));
		}
	}
}
