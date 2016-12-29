using System.ComponentModel.DataAnnotations.Schema;

namespace LudwigsRecipe.Data.DBContext.Models
{
	public class DifficultyLevel
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }
		public string Name { get; set; }
	}
}
