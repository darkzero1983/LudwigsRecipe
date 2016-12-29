using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using LudwigsRecipe.Service.Models.Ingredient;
using LudwigsRecipe.Service.Services.IngredientService;
using Microsoft.AspNetCore.Authorization;

namespace LudwigsRecipe.Web.Api.Recipe
{
	[Authorize(Roles = "Admin, Author")]
	[Route("api/cms/[controller]")]
	public class IngredientsController : Controller
	{
		#region ctor
		private readonly IIngredientService _ingredientService;

		public IngredientsController(IIngredientService ingredientService)
		{
			_ingredientService = ingredientService;
		}
		#endregion

		[HttpGet]
		public IEnumerable<IngredientViewModel> Get()
		{
			return _ingredientService.LoadIngredients(false);
		}
	}
}
