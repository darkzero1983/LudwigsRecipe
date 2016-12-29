using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace LudwigsRecipe.Data.DBContext.Models
{
	public class IngredientList
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }
		public Decimal Amount { get; set; }
		public Measurement Measurement { get; set; }
		public Ingredient Ingredient { get; set; }
		public Recipe Recipe { get; set; }
		public int SortOrder { get; set; }
	}
}
