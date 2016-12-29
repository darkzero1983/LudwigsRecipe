using LudwigsRecipe.Data.DBContext.Models.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LudwigsRecipe.Data.DBContext.Models
{
	/// <summary>
	/// Rezept
	/// </summary>
	public class Recipe
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		[Required]
		public string Name { get; set; }
		public string Description { get; set; }
		public string Content { get; set; }
		public bool IsPublished { get; set; }
		public bool IsOnlyForFriends { get; set; }
		public DateTime PublishDate { get; set; }

		public string TeaserImageUrl { get; set; }

		/// <summary>
		/// Anzahl der Zutatenliste
		/// </summary>
		public Nullable<Decimal> IngredientCount { get; set; }

		/// <summary>
		/// Einheit der Zutatenliste
		/// </summary>
		public Measurement Measurement { get; set; }

		/// <summary>
		/// Zutatenliste vom Rezept
		/// </summary>
		public List<IngredientList> IngredientsLists { get; set; }

		/// <summary>
		/// Autoren des Rezepts
		/// </summary>
		public List<RecipeToApplicationUser> RecipesToApplicationUsers { get; set; }

		/// <summary>
		/// Kategorien des Rezepts
		/// </summary>
		public List<RecipeToCategory> RecipesToCategories { get; set; }

		/// <summary>
		/// Sub Kategorien des Rezepts
		/// </summary>
		public List<RecipeToSubCategory> RecipesToSubCategories { get; set; }

		/// <summary>
		/// Zubereitungszeit
		/// </summary>
		public int? PreparationTime { get; set; }

		/// <summary>
		/// Wartezeit, z.B. Einlegen von Garnelen
		/// </summary>
		public int? WaitingTime { get; set; }

		/// <summary>
		/// Schwierigkeitsgrad
		/// </summary>
		public DifficultyLevel DifficultyLevel { get; set; }

		/// <summary>
		/// Google Tags
		/// </summary>
		public List<RecipeToSeoTag> RecipesToSeoTags { get; set; }


		//public virtual ICollection<Comment> Comments { get; set; }

		//public virtual ICollection<HitCount> HitCounts { get; set; }

		public string Url { get; set; }

	}
}
