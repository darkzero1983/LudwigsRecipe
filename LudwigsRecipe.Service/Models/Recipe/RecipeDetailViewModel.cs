﻿using LudwigsRecipe.Service.Models.Ingredient;
using LudwigsRecipe.Service.Models.Measurement;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LudwigsRecipe.Service.Models.Recipe
{
	public class RecipeDetailViewModel
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public string Content { get; set; }
		public DateTime PublishDate { get; set; }
		public string TeaserImageUrl { get; set; }

		[DisplayFormat(DataFormatString = "{0:n0}")]
		public Decimal? Amount { get; set; }


		[DisplayFormat(DataFormatString = "{0:n0}")]
		public Decimal? IngredientCount { get; set; }
		public MeasurementViewModel Measurement { get; set; }
		public List<IngredientsViewModel> Ingredients { get; set; }
		public int? PreparationTime { get; set; }
		public int? WaitingTime { get; set; }

		public RecipeDetailViewModel()
		{
			Ingredients = new List<IngredientsViewModel>();
			Measurement = new MeasurementViewModel();
		}
	}
}
