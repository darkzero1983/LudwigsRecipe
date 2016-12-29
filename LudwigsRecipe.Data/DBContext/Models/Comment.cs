using LudwigsRecipe.Data.DBContext.Models.Identity;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace LudwigsRecipe.Data.DBContext.Models
{
	public class Comment
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		public virtual ApplicationUser User { get; set; }

		public DateTime PublishDate { get; set; }
		public bool Published { get; set; }
		public string Content { get; set; }
		public string Ip { get; set; }
	}
}
