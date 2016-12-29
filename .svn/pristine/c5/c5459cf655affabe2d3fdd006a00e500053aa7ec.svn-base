using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using LudwigsRecipe.Service.Services.User;
using LudwigsRecipe.Service.Models.User;

namespace LudwigsRecipe.Web.Api.Recipe
{
	[Authorize(Roles = "Admin, Author")]
	[Route("api/cms/[controller]")]
	public class AuthorsController : Controller
	{
		#region ctor
		private readonly IUserService _userService;

		public AuthorsController(IUserService userService)
		{
			_userService = userService;
		}
		#endregion

		[HttpGet]
		public IEnumerable<AuthorViewModel> Get()
		{
			return _userService.LoadAuthors();
		}
	}
}
