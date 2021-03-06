﻿using LudwigsRecipe.Service.Models.Ingredient;
using System.Collections.Generic;

namespace LudwigsRecipe.Service.Services.IngredientService
{
	public interface IIngredientService
	{
		List<IngredientViewModel> LoadIngredients(bool widthUsage);
		bool UpdateOrCombineIngredient(int id, string name);

	}
}
