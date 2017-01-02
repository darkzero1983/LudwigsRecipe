using LudwigsRecipe.Data.DataModels.Ingredient;
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
	}
}
