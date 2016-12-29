using LudwigsRecipe.Data.DBContext.Models.Identity;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace LudwigsRecipe.Data.DBContext.Models
{
	/// <summary>
	/// Zugriffscounter
	/// </summary>
	public class HitCount
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }
		public DateTime HitDate { get; set; }
		public virtual ApplicationUser User { get; set; }
		public virtual Recipe Recipe { get; set; }
		public string Ip { get; set; }
		public string Url { get; set; }
	}
}