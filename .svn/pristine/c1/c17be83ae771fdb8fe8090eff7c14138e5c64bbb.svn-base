using LudwigsRecipe.Data.DataModels.IngredientList;
using LudwigsRecipe.Data.DBContext;
using LudwigsRecipe.Data.DBContext.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LudwigsRecipe.Data.Repositories.IngredientListRepositories
{
	public class IngredientListRepository : IIngredientListRepository
	{
		#region ctor
		ApplicationDbContext ctx;

		public IngredientListRepository(ApplicationDbContext applicationDbContext)
		{
			ctx = applicationDbContext;
		}
		#endregion

		public List<IIngredientListData> LoadIngredientListFromRecipe(int recipeId)
		{
			List<IIngredientListData> ingredientLists = new List<IIngredientListData>();
			List<IngredientList> dbIngredientLists =  ctx.IngredientsLists.Include(x => x.Ingredient).Include(x => x.Measurement).Where(x => x.Recipe.Id == recipeId).OrderBy(y => y.SortOrder).ToList();

			foreach (IngredientList dbIngredientList in dbIngredientLists)
			{
				ingredientLists.Add(new IngredientListData()
				{
					Id = dbIngredientList.Id,
					Amount = dbIngredientList.Amount,
					IngredientId = dbIngredientList.Ingredient.Id,
					IngredientName = dbIngredientList.Ingredient.Name,
					MeasurementId = dbIngredientList.Measurement.Id,
					MeasurementName = dbIngredientList.Measurement.Name,
					SortOrder = dbIngredientList.SortOrder,
					RecipeId = recipeId
				});
			}
			return ingredientLists;
		}

		public int AddOrUpdateIngredientListFromRecipe(IIngredientListData ingredientListData)
		{
			if(ingredientListData.IngredientId == 0 || ingredientListData.MeasurementId == 0)
			{
				return 0;
			}

			Recipe recipe = ctx.Recipes.FirstOrDefault(x => x.Id == ingredientListData.RecipeId);
			if(recipe == null)
			{
				return 0;
			}

			Measurement measurement = ctx.Measurements.FirstOrDefault(x => x.Id == ingredientListData.MeasurementId);
			if(measurement == null)
			{
				return 0;
			}

			Ingredient ingredient = ctx.Ingredients.FirstOrDefault(x => x.Id == ingredientListData.IngredientId);
			if(ingredient == null)
			{
				return 0;
			}

			if(ingredientListData.Id == 0)
			{
				IngredientList dbIngredientList = new IngredientList()
				{
					Amount = ingredientListData.Amount,
					Ingredient = ingredient,
					Measurement = measurement,
					Recipe = recipe,
					SortOrder = ingredientListData.SortOrder
				};
				ctx.IngredientsLists.Add(dbIngredientList);
				ctx.SaveChanges();
				return dbIngredientList.Id;
			}
			else
			{
				IngredientList dbIngredientList = ctx.IngredientsLists.FirstOrDefault(x => x.Id == ingredientListData.Id);
				if(dbIngredientList != null)
				{
					dbIngredientList.Ingredient = ingredient;
					dbIngredientList.Measurement = measurement;
					dbIngredientList.Recipe = recipe;
					dbIngredientList.SortOrder = ingredientListData.SortOrder;
					dbIngredientList.Amount = ingredientListData.Amount;
					ctx.SaveChanges();
					return dbIngredientList.Id;
				}
			}
			return 0;
		}

		public void DeleteIngredientListFromRecipeWhereNotInList(List<int> ingerdientListIds, int recipeId)
		{
			List<IngredientList> ingredientLists = ctx.IngredientsLists.Where(x => !ingerdientListIds.Contains(x.Id) && x.Recipe.Id == recipeId).ToList();

			ctx.IngredientsLists.RemoveRange(ingredientLists);
			ctx.SaveChanges();
		}
	}
}
