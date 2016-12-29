using LudwigsRecipe.Data.DataModels.Category;
using LudwigsRecipe.Data.DBContext;
using LudwigsRecipe.Data.DBContext.Models;
using System.Linq;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace LudwigsRecipe.Data.Repositories.CategoryRepository
{
	public class CategoryRepository : ICategoryRepository
	{
		ApplicationDbContext ctx;

		public CategoryRepository(ApplicationDbContext applicationDbContext)
		{
			ctx = applicationDbContext;
		}
		public int AddCategory(ICategoryData category)
		{
			DBContext.Models.Category newCategory = new DBContext.Models.Category()
			{
				DisplayOrder = category.Order,
				IsDisplayInMainNavigation = category.IsMainMenu,
				Name = category.Name,
				Url = category.Url
			};
			ctx.Categories.Add(newCategory);
			ctx.SaveChanges();
			return newCategory.Id;
		}

		public int AddSubCategory(ISubCategoryData subCategory)
		{
			DBContext.Models.Category category = ctx.Categories.FirstOrDefault(x => x.Id == subCategory.CategoryId);
			
			SubCategory newSubCategory = new SubCategory()
			{
				DisplayOrder = subCategory.Order,
				Name = subCategory.Name,
				Url = subCategory.Url,
				Category = category
			};
			newSubCategory.RecipesToSubCategories = new List<RecipeToSubCategory>();
			
			ctx.SubCategories.Add(newSubCategory);
			ctx.SaveChanges();
			return newSubCategory.Id;
		}


		public void SaveCategory(ICategoryData category)
		{
			DBContext.Models.Category changeCategory = ctx.Categories.FirstOrDefault(x => x.Id == category.Id);

			changeCategory.DisplayOrder = category.Order;
			changeCategory.IsDisplayInMainNavigation = category.IsMainMenu;
			changeCategory.Name = category.Name;
			changeCategory.Url = category.Url;
			
			ctx.SaveChanges();
		}

		public void SaveSubCategory(ISubCategoryData subCategory)
		{
			DBContext.Models.SubCategory changeSubCategory = ctx.SubCategories.FirstOrDefault(x => x.Id == subCategory.Id);

			changeSubCategory.DisplayOrder = subCategory.Order;
			changeSubCategory.Name = subCategory.Name;
			changeSubCategory.Url = subCategory.Url;

			ctx.SaveChanges();
		}

		public void DeleteCategoriesWhereNotInLIst(List<int> categoryIDs)
		{
			List<DBContext.Models.Category> categories = ctx.Categories.Where(x => !categoryIDs.Contains(x.Id)).ToList();
			
			ctx.Categories.RemoveRange(categories);
			ctx.SaveChanges();
		}

		public void DeleteSubCategoriesWhereNotInLIst(List<int> subCategoryIDs)
		{
			List<SubCategory> subCategories = ctx.SubCategories.Where(x => !subCategoryIDs.Contains(x.Id)).ToList();

			ctx.SubCategories.RemoveRange(subCategories);
			ctx.SaveChanges();
		}

		public List<ICategoryData> LoadCategories()
		{
			List<ICategoryData> categories = new List<ICategoryData>();
			List<Category> dbCategories = ctx.Categories.Include(x => x.SubCategories).ToList();
			foreach (Category category in dbCategories)
			{
				List<ISubCategoryData> subCategories = new List<ISubCategoryData>();

				foreach (SubCategory subCategory in category.SubCategories)
				{
					subCategories.Add(new SubCategoryData()
					{
						CategoryId = category.Id,
						Id = subCategory.Id,
						Name = subCategory.Name,
						Order = subCategory.DisplayOrder,
						Url = subCategory.Url
					});
				}

				categories.Add(new CategoryData()
				{
					Id = category.Id,
					IsMainMenu = category.IsDisplayInMainNavigation,
					Name = category.Name,
					Order = category.DisplayOrder,
					Url = category.Url,
					SubCategories = subCategories
				});
			}
			return categories;
		}

		public List<ICategorySelectData> LoadCategoriesForRecipe(int recipeId)
		{
			List<int> selectedCategories = ctx.RecipesToCategories.Where(x => x.RecipeId == recipeId).Select(x => x.CategoryId).ToList<int>();
			List<int> selectedSubCategories = ctx.RecipesToSubCategories.Where(x => x.RecipeId == recipeId).Select(x => x.SubCategoryId).ToList<int>();

			List<ICategorySelectData> categories = new List<ICategorySelectData>();
			List<Category> dbCategories = ctx.Categories.Include(x => x.SubCategories).ToList();
			foreach (Category category in dbCategories)
			{
				List<ISubCategorySelectData> subCategories = new List<ISubCategorySelectData>();

				foreach (SubCategory subCategory in category.SubCategories)
				{
					subCategories.Add(new SubCategorySelectData()
					{
						Id = subCategory.Id,
						Name = subCategory.Name,
						IsSelected = selectedSubCategories.Contains(subCategory.Id)
					});
				}

				categories.Add(new CategorySelectData()
				{
					Id = category.Id,
					Name = category.Name,
					IsSelected = selectedCategories.Contains(category.Id),
					SubCategoryDatas = subCategories
				});
			}
			return categories;
		}

		public void AddAndRemoveCategoriesFromRecipe(List<int> categoryIds, int recipeId)
		{
			Recipe recipe = ctx.Recipes.FirstOrDefault(x => x.Id == recipeId);
			if(recipe == null)
			{
				return;
			}

			ctx.RecipesToCategories.RemoveRange(ctx.RecipesToCategories.Where(x => x.RecipeId == recipeId).ToList());
			ctx.SaveChanges();

			List<Category> categories = ctx.Categories.Where(x => categoryIds.Contains(x.Id)).ToList();

			foreach (Category category in categories)
			{
				ctx.RecipesToCategories.Add(new RecipeToCategory() {
					Category = category,
					CategoryId = category.Id,
					Recipe = recipe,
					RecipeId = recipe.Id
				});
			}
			ctx.SaveChanges();
		}

		public void AddAndRemoveSubCategoriesFromRecipe(List<int> subCategoryIds, int recipeId)
		{
			Recipe recipe = ctx.Recipes.FirstOrDefault(x => x.Id == recipeId);
			if (recipe == null)
			{
				return;
			}

			ctx.RecipesToSubCategories.RemoveRange(ctx.RecipesToSubCategories.Where(x => x.RecipeId == recipeId).ToList());
			ctx.SaveChanges();

			List<SubCategory> subCategories = ctx.SubCategories.Where(x => subCategoryIds.Contains(x.Id)).ToList();

			foreach (SubCategory subCategory in subCategories)
			{
				ctx.RecipesToSubCategories.Add(new RecipeToSubCategory()
				{
					SubCategory = subCategory,
					SubCategoryId = subCategory.Id,
					Recipe = recipe,
					RecipeId = recipe.Id
				});
			}
			ctx.SaveChanges();
		}

		public List<ICategoryData> LoadCategoriesWithRecipes(bool isFriend)
		{
			List<ICategoryData> categories = new List<ICategoryData>();
			try
			{
				var queryCategories = ctx.RecipesToCategories.Include(x => x.Recipe).Include(x => x.Category).ThenInclude(x => x.SubCategories).AsQueryable();
				queryCategories = queryCategories.Where(x => x.Recipe.IsPublished == true && x.Recipe.PublishDate <= DateTime.Now);
				if (!isFriend)
				{
					queryCategories = queryCategories.Where(x => x.Recipe.IsOnlyForFriends == false);
				}
				List<RecipeToCategory> dbRecipesToCategories = queryCategories.Distinct().ToList();
				
				foreach (RecipeToCategory recipeToCategory in dbRecipesToCategories)
				{
					if(categories.FirstOrDefault(x => x.Id == recipeToCategory.Category.Id) != null)
					{
						continue;
					}
					List<ISubCategoryData> subCategories = new List<ISubCategoryData>();
					if (recipeToCategory.Category.SubCategories != null)
					{
						var querySubCategories = ctx.RecipesToSubCategories.Include(x => x.Recipe).Include(x => x.SubCategory).AsQueryable();
						querySubCategories = querySubCategories.Where(x => recipeToCategory.Category.SubCategories.Select(y => y.Id).Contains(x.SubCategoryId));
					
						querySubCategories = querySubCategories.Where(x => x.Recipe.IsPublished == true && x.Recipe.PublishDate <= DateTime.Now);
						if (!isFriend)
						{
							querySubCategories = querySubCategories.Where(x => x.Recipe.IsOnlyForFriends == false);
						}
						List<SubCategory> dbSubCategories = querySubCategories.Select(x => x.SubCategory).Distinct().ToList();

						foreach (SubCategory subCategory in dbSubCategories)
						{
							if(subCategories.FirstOrDefault(x => x.Id == subCategory.Id) != null)
							{
								continue;
							}
							subCategories.Add(new SubCategoryData()
							{
								CategoryId = recipeToCategory.Category.Id,
								Id = subCategory.Id,
								Name = subCategory.Name,
								Order = subCategory.DisplayOrder,
								Url = subCategory.Url
							});
						}
					}
					categories.Add(new CategoryData()
					{
						Id = recipeToCategory.Category.Id,
						IsMainMenu = recipeToCategory.Category.IsDisplayInMainNavigation,
						Name = recipeToCategory.Category.Name,
						Order = recipeToCategory.Category.DisplayOrder,
						Url = recipeToCategory.Category.Url,
						SubCategories = subCategories
					});
				}
			}
			catch (Exception exception)
			{

			}
			return categories;
		}

		public string LoadCategoryNameByUrl(string url)
		{
			Category category = ctx.Categories.FirstOrDefault(x => x.Url == url);
			if(category == null)
			{
				return string.Empty;
			}
			return category.Name;
		}

		public string LoadSubCategoryNameByUrl(string url)
		{
			SubCategory subCategory = ctx.SubCategories.FirstOrDefault(x => x.Url == url);
			if (subCategory == null)
			{
				return string.Empty;
			}
			return subCategory.Name;
		}
	}
}