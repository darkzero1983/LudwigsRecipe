using Microsoft.AspNetCore.Mvc;
using LudwigsRecipe.Service.Services.Recipe;
using LudwigsRecipe.Service.Models.Recipe;
using LudwigsRecipe.Service.Models.Api;
using System;

namespace LudwigsRecipe.Web.Api.Recipe
{
	[Route("api/cms/[controller]")]
	public class RecipeController : Controller
	{
		#region ctor
		private readonly IRecipeService _recipeService;

		public RecipeController(IRecipeService recipeService)
		{
			_recipeService = recipeService;
		}
		#endregion

		[HttpGet("{id}")]
		public RecipeEditViewModel Get(int id)
		{
			RecipeEditViewModel recipe = new RecipeEditViewModel();

			if (User.IsInRole("Admin") || User.IsInRole("Author"))
			{
				recipe = _recipeService.LoadRecipeEditViewModel(id);
			}
			
			return recipe;
		}

		[HttpPost]
		public FormResult Post([FromBody]RecipeEditViewModel model)
		{
			FormResult result = new FormResult();
			result.RequestSuccess = false;
			if (model == null)
			{
				return result;
			}

			try
			{
				FormResult validationResult = IsModelValid(model);
				if (!validationResult.RequestSuccess)
				{
					return validationResult;
				}
				result.NewId = model.Id;
				_recipeService.SaveRecipeEditViewModel(model);
				result.NewId = model.Id;
				result.SuccessMessage = "Die Anpassungen wurden erfolgreich gespeichert";
				result.RequestSuccess = true;
			}
			catch (Exception e)
			{
				result.ErrorMessage = "Beim Speichern ist ein Fehler aufgetreten:<br>" + e.Message;
			}
			return result;
		}

		[HttpDelete("{id}")]
		public FormResult Delete(int id)
		{
			_recipeService.DeleteRecipe(id);
			return new FormResult();
		}

		private FormResult IsModelValid(RecipeEditViewModel model)
		{
			FormResult result = new FormResult();

			result.RequestSuccess = true;
			return result;
		}
	}
}
