﻿using LudwigsRecipe.Data.DataModels.Ingredient;
using LudwigsRecipe.Data.Repositories.IngredientRepository;
using LudwigsRecipe.Service.Models.Ingredient;
using System.Collections.Generic;
using System;

namespace LudwigsRecipe.Service.Services.IngredientService
{
	public class IngredientService : IIngredientService
	{
		#region ctor
		private readonly IIngredientRepository _ingredientRepository;

		public IngredientService(IIngredientRepository ingredientRepository)
		{
			_ingredientRepository = ingredientRepository;
		}
		#endregion

		public List<IngredientViewModel> LoadIngredients(bool widthUsage)
		{
			List<IngredientViewModel> ingredients = new List<IngredientViewModel>();

			List<IIngredientData> ingredientDatas = _ingredientRepository.LoadIngredients();

			foreach (IIngredientData ingredientData in ingredientDatas)
			{
				ingredients.Add(new IngredientViewModel()
				{
					Id = ingredientData.Id,
					Name = ingredientData.Name,
					UsageCount = ingredientData.UsageCount
				});
			}

			return ingredients;
		}

		public bool UpdateOrCombineIngredient(int id, string name)
		{
			return _ingredientRepository.UpdateOrCombineIngredient(id, name);
		}
	}
}
