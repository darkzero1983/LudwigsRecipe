using LudwigsRecipe.Data.DBContext.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LudwigsRecipe.Data.DBContext
{
	public class Seeder : ISeeder
	{
		ApplicationDbContext _ctx;
		UserManager<ApplicationUser> _userManager;

		public Seeder(ApplicationDbContext ctx, UserManager<ApplicationUser> userManager)
		{
			_ctx = ctx;
			_userManager = userManager;
		}

		public void EnsureSeedData()
		{
			#region Roles
			List<string> roleNames = new List<string>() { "Admin", "Author", "Friend" };

			foreach (string roleName in roleNames)
			{
				//Create Role Admin if it does not exist
				var role = _ctx.Roles.FirstOrDefault(x => x.Name == roleName);

				if (role == null)
				{
					role = new IdentityRole(roleName);
					_ctx.Roles.Add(role);
				}

			}
			_ctx.SaveChanges();
			#endregion

			#region Recipe
			/*
			var recipe = _ctx.Recipes.FirstOrDefault(x => x.Id == 1);
			if (recipe == null)
			{
				recipe = new Recipe()
				{
					Name = "VORSCHAU",
					Description = "",
					Content = "",
					IsPublished = false,
					PublishDate = DateTime.Now,
					Url = "VORSCHAU"
				};
				_ctx.Recipes.Add(recipe);
			}
			*/
			#endregion

			_ctx.SaveChanges();
		}
	}
}
