using LudwigsRecipe.Data.DBContext.Models.Identity;
using LudwigsRecipe.Service.Models.Account;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace LudwigsRecipe.Web.Api.Account
{
	[Route("api/account/[controller]")]
	public class GetUserInformationController : Controller
	{
		#region ctor
		private readonly SignInManager<ApplicationUser> _signInManager;
		private readonly UserManager<ApplicationUser> _userManager;
		public GetUserInformationController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
		{
			_signInManager = signInManager;
			_userManager = userManager;
		}
		#endregion

		[HttpGet]
		public async Task<UserInformationViewModel> Get()
		{
			UserInformationViewModel model = new UserInformationViewModel()
			{
				IsAuthenticated = User.Identity.IsAuthenticated,
				UserName = User.Identity.Name,
				IsFriend = User.IsInRole("Friend"),
				IsAdmin = User.IsInRole("Admin"),
				IsAuthor = User.IsInRole("Author")
			};
			

			if (model.IsAuthenticated)
			{
				ApplicationUser user = await _userManager.FindByNameAsync(User.Identity.Name);
				await _signInManager.SignInAsync(user, true);
				
			}
			return model;
		}
	}
}
