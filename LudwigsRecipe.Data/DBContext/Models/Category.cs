using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace LudwigsRecipe.Data.DBContext.Models
{
	public class Category
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }
		
		public string Name { get; set; }
		
		public string Url { get; set; }

		public bool IsDisplayInMainNavigation { get; set; }

		public int DisplayOrder { get; set; }

		public List<RecipeToCategory> RecipesToCategories { get; set; }

		public virtual ICollection<SubCategory> SubCategories { get; set; }
	}
}
