using LudwigsRecipe.Data.DBContext.Models.Identity;
using LudwigsRecipe.Service.Models.Account;
using LudwigsRecipe.Service.Models.Api;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace LudwigsRecipe.Web.Api.Account
{
	[Route("api/account/[controller]")]
	public class ResetPasswordController : Controller
	{
		#region ctor
		private readonly UserManager<ApplicationUser> _userManager;
		public ResetPasswordController(UserManager<ApplicationUser> userManager)
		{
			_userManager = userManager;
		}
		#endregion

		// POST api/values
		[HttpPost]
		public async Task<FormResult> Post([FromBody]ResetPasswordViewModel model)
		{
			ApplicationUser user = await _userManager.FindByIdAsync(model.UserId);
			if (user == null)
			{
				return new FormResult() { RequestSuccess = false, ErrorMessage = "Der User konnte nicht gefunden werden" };
			}

			var result = await _userManager.ResetPasswordAsync(user, model.Code, model.Password);

			if (result.Succeeded)
			{
				return new FormResult() { RequestSuccess = true };
			}
			return new FormResult() { RequestSuccess = false };
		}
	}
}
