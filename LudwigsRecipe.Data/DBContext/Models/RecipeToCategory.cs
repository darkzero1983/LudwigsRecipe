using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LudwigsRecipe.Data.DBContext.Models
{
	public class RecipeToCategory
	{
		public int RecipeId { get; set; }
		public Recipe Recipe { get; set; }

		public int CategoryId { get; set; }
		public Category Category { get; set; }
	}
}
