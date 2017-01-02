﻿using System;

namespace LudwigsRecipe.Data.DataModels.Ingredient
{
	public class IngredientData : IIngredientData
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int UsageCount { get; set; }
	}
}