using LudwigsRecipe.Data.DBContext.Models.Identity;
using LudwigsRecipe.Service.Models.Account;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace LudwigsRecipe.Web.Api.Account
{
	[Route("api/account/[controller]")]
	public class LoginController : Controller
	{
		#region ctor
		private readonly SignInManager<ApplicationUser> _signInManager;
		public LoginController(SignInManager<ApplicationUser> signInManager)
		{
			_signInManager = signInManager;
		}
		#endregion

		[HttpPost]
		public async Task<bool> Post([FromBody]LoginViewModel model)
		{
			var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, model.RememberMe, false);
			return result.Succeeded;
		}
	}
}
