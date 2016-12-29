using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace LudwigsRecipe.Data.DBContext.Models.Identity
{
	public class ApplicationUser : IdentityUser
	{
		public string AutorDisplayName { get; set; }
		public List<RecipeToApplicationUser> RecipesToApplicationUsers { get; set; }
		/*
		public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
		{
			// Note the authenticationType must match the one 
			// defined in CookieAuthenticationOptions.AuthenticationType
			var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);

			// Add custom user claims here
			return userIdentity;
		}*/
	}
}
