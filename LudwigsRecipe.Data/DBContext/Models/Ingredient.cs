using System.ComponentModel.DataAnnotations.Schema;

namespace LudwigsRecipe.Data.DBContext.Models
{
	/// <summary>
	/// Zutaten
	/// </summary>
	public class Ingredient
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }
		public string Name { get; set; }
	}
}
