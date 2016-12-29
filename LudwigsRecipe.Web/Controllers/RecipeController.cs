﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LudwigsRecipe.Service.Services.Recipe;
using LudwigsRecipe.Service.Models.Recipe;
using System.Text.RegularExpressions;
using LudwigsRecipe.Service.Models.Ingredient;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace LudwigsRecipe.Web.Controllers
{
    public class RecipeController : Controller
    {
		public IRecipeService _recipeService { get; set; }

		public RecipeController(IRecipeService recipeService)
		{
			_recipeService = recipeService;
		}
		public IActionResult Detail(string url, int id)
		{
			return View();
		}

		public IActionResult Print(int id, Decimal amount)
		{
			RecipeDetailViewModel recipe = _recipeService.LoadRecipe(id, User.IsInRole("Friend"));
			recipe.Amount = amount;

			

			if(recipe.IngredientCount.HasValue && recipe.IngredientCount > 0 && amount > 0)
			{
				foreach (IngredientsViewModel ingredient in recipe.Ingredients)
				{
					ingredient.Amount = (ingredient.Amount / recipe.IngredientCount.Value) * amount;
				}

				foreach (Match match in Regex.Matches(recipe.Content, "d n=\"([^ \"]*)\""))
				{
					if (match.Success)
					{
						for (int i = 0; i < match.Groups.Count; i++)
						{
							Group g = match.Groups[i];
							string dynamicNumberString = g.Value.Replace("d n=", "").Replace("\"", "");
							decimal dynamicNumber;
							Decimal.TryParse(dynamicNumberString, out dynamicNumber);
							recipe.Content = recipe.Content.Replace("<d n=\"" + dynamicNumberString + "\"></d>", ((dynamicNumber / recipe.IngredientCount.Value) * amount).ToString());
						}
					}
				}
			}

			return View(recipe);
		}
	}
}
