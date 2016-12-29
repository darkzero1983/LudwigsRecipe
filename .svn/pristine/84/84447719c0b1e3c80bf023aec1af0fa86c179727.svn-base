using LudwigsRecipe.Data.DBContext.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace LudwigsRecipe.Web.Api.Account
{
	[Route("api/account/[controller]")]
	public class LogoutController : Controller
	{
		#region ctor
		private readonly SignInManager<ApplicationUser> _signInManager;
		public LogoutController(SignInManager<ApplicationUser> signInManager)
		{
			_signInManager = signInManager;
		}
		#endregion

		[HttpPost]
		public async Task<bool> Post()
		{
			await _signInManager.SignOutAsync();
			return true;
		}
	}
}
