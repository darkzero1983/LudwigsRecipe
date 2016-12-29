using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace LudwigsRecipe.Data.DBContext.Models
{
	public class SubCategory
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }
		public string Name { get; set; }
		public string Url { get; set; }
		public int DisplayOrder { get; set; }
		public Category Category { get; set; }
		public List<RecipeToSubCategory> RecipesToSubCategories { get; set; }
	}
}
