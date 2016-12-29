using LudwigsRecipe.Data.DBContext.Models.Identity;
using LudwigsRecipe.Service.Models.Account;
using LudwigsRecipe.Service.Models.Api;
using LudwigsRecipe.Service.Services.Message;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace LudwigsRecipe.Web.Api.Account
{
	[Route("api/account/[controller]")]
	public class ForgotPasswordController : Controller
	{
		#region ctor
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly IEmailSender _emailSender;
		public ForgotPasswordController(UserManager<ApplicationUser> userManager, IEmailSender emailSender)
		{
			_userManager = userManager;
			_emailSender = emailSender;
		}
		#endregion

		[HttpPost]
		public async Task<FormResult> Post([FromBody]ForgotPasswordViewModel model)
		{
			FormResult result = new FormResult();
			result.RequestSuccess = false;
			if (ModelState.IsValid)
			{
				ApplicationUser user = await _userManager.FindByEmailAsync(model.Email);
				if (user == null || !(await _userManager.IsEmailConfirmedAsync(user)))
				{
					return result;
				}

				var code = await _userManager.GeneratePasswordResetTokenAsync(user);
				var callbackUrl = Url.Action("ResetPassword", "Account", new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
				await _emailSender.SendRegisterValidationMail(user.Email, "Ludwigs Rezepte - Passwort zurücksetzen", "Bitte klicke auf den folgenden Link, um dein Passwort zurückzusetzen:<br><br><a href=\"" + callbackUrl + "\">" + callbackUrl + "</a>");
				result.RequestSuccess = true;
			}
			return result;
		}
	}
}
