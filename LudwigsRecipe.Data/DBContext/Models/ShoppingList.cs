using LudwigsRecipe.Data.DBContext.Models.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace LudwigsRecipe.Data.DBContext.Models
{
	public class ShoppingList
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		/// <summary>
		/// User der Einkaufsliste
		/// </summary>
		[Key, ForeignKey("ApplicationUser")]
		public string UserId { get; set; }

		//Navigation properties
		[ForeignKey("UserId")]
		public ApplicationUser ApplicationUser { get; set; }

		public string Name { get; set; }

		/// <summary>
		/// Zutatenliste vom Rezept
		/// </summary>
		public virtual List<IngredientList> Ingredients { get; set; }
	}
}
