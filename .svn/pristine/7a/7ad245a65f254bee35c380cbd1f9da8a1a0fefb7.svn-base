using LudwigsRecipe.Data.DataModels.SeoTag;
using LudwigsRecipe.Data.DBContext;
using LudwigsRecipe.Data.DBContext.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LudwigsRecipe.Data.Repositories.SeoTagRepositories
{
	public class SeoTagRepository : ISeoTagRepository
	{
		#region ctor
		private readonly ApplicationDbContext ctx;

		public SeoTagRepository(ApplicationDbContext _ctx)
		{
			ctx = _ctx;
		}
		#endregion

		public List<ISeoTagData> LoadSeoTags()
		{
			List<ISeoTagData> seoTags = new List<ISeoTagData>();

			List<SeoTag> dbSeoTags = ctx.SeoTags.ToList();
			
			foreach (SeoTag dbSeoTag in dbSeoTags)
			{
				seoTags.Add(new SeoTagData() { 
					Id = dbSeoTag.Id,
					Name = dbSeoTag.Name
				});
			}

			return seoTags;
		}

		public List<ISeoTagData> LoadSeoTagsFromRecipe(int recipeId)
		{
			List<ISeoTagData> seoTags = new List<ISeoTagData>();

			List<RecipeToSeoTag> dbSeoTags = ctx.RecipesToSeoTags.Include(x => x.SeoTag).Where(x => x.RecipeId == recipeId).ToList();

			foreach (RecipeToSeoTag dbSeoTag in dbSeoTags)
			{
				seoTags.Add(new SeoTagData()
				{
					Id = dbSeoTag.SeoTag.Id,
					Name = dbSeoTag.SeoTag.Name
				});
			}

			return seoTags;
		}

		public int AddOrSelectSeoTag(ISeoTagData seoTagData)
		{
			seoTagData.Name = seoTagData.Name.Trim();
			if(string.IsNullOrEmpty(seoTagData.Name))
			{
				return 0;
			}

			SeoTag seoTag = ctx.SeoTags.FirstOrDefault(x => x.Name.ToLower() == seoTagData.Name.ToLower());
			if (seoTag == null)
			{
				seoTag = new SeoTag()
				{
					Name = seoTagData.Name
				};
				ctx.SeoTags.Add(seoTag);
				ctx.SaveChanges();
			}
			return seoTag.Id;
		}

		public void AddAndRemoveSeoTagsFromRecipe(List<int> seoTagIds, int recipeId)
		{
			Recipe recipe = ctx.Recipes.Include(x => x.RecipesToApplicationUsers).FirstOrDefault(x => x.Id == recipeId);
			if (recipe == null)
			{
				return;
			}
			List<SeoTag> dbSeoTags = ctx.SeoTags.Where(x => seoTagIds.Contains(x.Id)).ToList();
			List<RecipeToSeoTag> recipesToSeoTags = new List<RecipeToSeoTag>();

			foreach (SeoTag dbSeoTag in dbSeoTags)
			{
				recipesToSeoTags.Add(new RecipeToSeoTag()
				{
					SeoTagId = dbSeoTag.Id,
					SeoTag = dbSeoTag,
					Recipe = recipe,
					RecipeId = recipe.Id
				});
			}

			ctx.RecipesToSeoTags.RemoveRange(ctx.RecipesToSeoTags.Where(x => x.RecipeId == recipe.Id).ToList());
			ctx.SaveChanges();
			ctx.RecipesToSeoTags.AddRange(recipesToSeoTags);
			ctx.SaveChanges();
		}
	}
}