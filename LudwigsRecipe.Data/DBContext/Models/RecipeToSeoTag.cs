using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LudwigsRecipe.Data.DBContext.Models
{
	public class RecipeToSeoTag
	{
		public int RecipeId { get; set; }
		public Recipe Recipe { get; set; }

		public int SeoTagId { get; set; }
		public SeoTag SeoTag { get; set; }
	}
}
