using LudwigsRecipe.Data.DBContext.Models;
using LudwigsRecipe.Data.DBContext.Models.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LudwigsRecipe.Data.DBContext
{
	public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
	{
		private static bool _created = false;

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{
			if (!_created)
			{
				Database.EnsureCreated();
				_created = true;
			}
		}

		public DbSet<Category> Categories { get; set; }
		//public DbSet<Comment> Comment { get; set; }
		//public DbSet<DifficultyLevel> DifficultyLevel { get; set; }
		public DbSet<HitCount> HitCounts { get; set; }
		public DbSet<Ingredient> Ingredients { get; set; }
		public DbSet<IngredientList> IngredientsLists { get; set; }
		public DbSet<Measurement> Measurements { get; set; }
		public DbSet<Recipe> Recipes { get; set; }
		public DbSet<RecipeToApplicationUser> RecipesToApplicationUsers { get; set; }
		public DbSet<RecipeToSeoTag> RecipesToSeoTags { get; set; }
		public DbSet<RecipeToCategory> RecipesToCategories { get; set; }
		public DbSet<RecipeToSubCategory> RecipesToSubCategories { get; set; }
		public DbSet<SeoTag> SeoTags { get; set; }
		public DbSet<ShoppingList> ShoppingLists { get; set; }
		public DbSet<SubCategory> SubCategories { get; set; }
		
		protected override void OnModelCreating(ModelBuilder builder)
		{

			foreach (var entity in builder.Model.GetEntityTypes())
			{
				entity.Relational().TableName = entity.ClrType.Name;
			}

			#region Recipe to Category
			builder.Entity<RecipeToCategory>()
				.HasKey(t => new { t.RecipeId, t.CategoryId });

			builder.Entity<RecipeToCategory>()
				.HasOne(pt => pt.Recipe)
				.WithMany(p => p.RecipesToCategories)
				.HasForeignKey(pt => pt.RecipeId);

			builder.Entity<RecipeToCategory>()
				.HasOne(pt => pt.Category)
				.WithMany(p => p.RecipesToCategories)
				.HasForeignKey(pt => pt.CategoryId);
			#endregion

			#region Recipe to SubCategory
			builder.Entity<RecipeToSubCategory>()
				.HasKey(t => new { t.RecipeId, t.SubCategoryId });

			builder.Entity<RecipeToSubCategory>()
				.HasOne(pt => pt.Recipe)
				.WithMany(p => p.RecipesToSubCategories)
				.HasForeignKey(pt => pt.RecipeId);

			builder.Entity<RecipeToSubCategory>()
				.HasOne(pt => pt.SubCategory)
				.WithMany(p => p.RecipesToSubCategories)
				.HasForeignKey(pt => pt.SubCategoryId);
			#endregion

			#region Recipe to SeoTag
			builder.Entity<RecipeToSeoTag>()
				.HasKey(t => new { t.RecipeId, t.SeoTagId });

			builder.Entity<RecipeToSeoTag>()
				.HasOne(pt => pt.Recipe)
				.WithMany(p => p.RecipesToSeoTags)
				.HasForeignKey(pt => pt.RecipeId);

			builder.Entity<RecipeToSeoTag>()
				.HasOne(pt => pt.SeoTag)
				.WithMany(p => p.RecipesToSeoTags)
				.HasForeignKey(pt => pt.SeoTagId);
			#endregion

			#region Recipe to Application User
			builder.Entity<RecipeToApplicationUser>()
				.HasKey(t => new { t.RecipeId, t.ApplicationUserId });

			builder.Entity<RecipeToApplicationUser>()
				.HasOne(pt => pt.Recipe)
				.WithMany(p => p.RecipesToApplicationUsers)
				.HasForeignKey(pt => pt.RecipeId);

			builder.Entity<RecipeToApplicationUser>()
				.HasOne(pt => pt.ApplicationUser)
				.WithMany(p => p.RecipesToApplicationUsers)
				.HasForeignKey(pt => pt.ApplicationUserId);
			#endregion

			builder.Entity<IngredientList>()
			.HasOne(p => p.Recipe)
			.WithMany(b => b.IngredientsLists);

			base.OnModelCreating(builder);
		}
	}
}
