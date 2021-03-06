﻿using LudwigsRecipe.Data.DataModels.Ingredient;
using LudwigsRecipe.Data.DBContext;
using LudwigsRecipe.Data.DBContext.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using LudwigsRecipe.Data.DataModels.Recipe;
using System;
using LudwigsRecipe.Data.DataModels.Measurement;
using LudwigsRecipe.Data.Helper;

namespace LudwigsRecipe.Data.Repositories.IngredientRepository
{
	public class IngredientRepository : IIngredientRepository
	{
		ApplicationDbContext ctx;

		public IngredientRepository(ApplicationDbContext applicationDbContext)
		{
			ctx = applicationDbContext;
		}

		public int FindOrAddIngredient(string ingredient)
		{
			if(string.IsNullOrWhiteSpace(ingredient))
			{
				return 0;
			}

			Ingredient dbIngredient = ctx.Ingredients.FirstOrDefault(x => x.Name.ToLower() == ingredient.ToLower().Trim());

			if(dbIngredient == null)
			{
				dbIngredient = new Ingredient()
				{
					Name = ingredient
				};
				ctx.Ingredients.Add(dbIngredient);
				ctx.SaveChanges();
			}
			return dbIngredient.Id;
		}

		public List<IIngredientData> LoadIngredients()
		{
			List<IIngredientData> ingredients = new List<IIngredientData>();

			List<IngredientList> dbIngredientLists = ctx.IngredientsLists.ToList();
			List<Ingredient> dbIngredients = ctx.Ingredients.OrderBy(x => x.Name).ToList();
			foreach (Ingredient dbIngredient in dbIngredients)
			{
				int count = dbIngredientLists.Where(x => x.Ingredient == dbIngredient).Count();
				ingredients.Add(new IngredientData() { 
					Id = dbIngredient.Id,
					Name = dbIngredient.Name,
					UsageCount = count
				});
			}
			return ingredients;
		}

		public bool UpdateOrCombineIngredient(int id, string name)
		{
			Ingredient currentIngredient = ctx.Ingredients.FirstOrDefault(x => x.Id == id);
			if(currentIngredient == null)
			{
				return false;
			}

			Ingredient existingIngredient = ctx.Ingredients.FirstOrDefault(x => x.Name.ToLower() == name.ToLower() && x.Id != id);
			if (existingIngredient != null)
			{
				List<IngredientList> ingredients = ctx.IngredientsLists.Where(x => x.Ingredient == currentIngredient).ToList();
				foreach (IngredientList ingredient in ingredients)
				{
					ingredient.Ingredient = existingIngredient;
				}
				ctx.SaveChanges();
				ctx.Ingredients.Remove(currentIngredient);
				ctx.SaveChanges();
			}
			else
			{
				currentIngredient.Name = name;
				ctx.SaveChanges();
			}
			return true;
		}
	}
}
