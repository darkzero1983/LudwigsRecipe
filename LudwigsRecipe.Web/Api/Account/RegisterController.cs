using System.Threading.Tasks;
using LudwigsRecipe.Data.DBContext.Models.Identity;
using LudwigsRecipe.Service.Services.Message;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using LudwigsRecipe.Service.Models.Api;
using LudwigsRecipe.Service.Models.Account;

namespace LudwigsRecipe.Web.Api.Account
{
	[Route("api/account/[controller]")]
	public class RegisterController : Controller
	{
		#region ctor
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly IEmailSender _emailSender;
		public RegisterController(UserManager<ApplicationUser> userManager, IEmailSender emailSender)
		{
			_userManager = userManager;
			_emailSender = emailSender;
		}
		#endregion

		[HttpPost]
		public async Task<FormResult> Post([FromBody]RegisterViewModel model)
		{
			FormResult result = new FormResult();
			result.RequestSuccess = false;

			if (!IsUserNameAllowed(model.UserName) || (await _userManager.FindByNameAsync(model.UserName)) != null)
			{
				result.ErrorMessage = "Der Benutzername ist leider schon vergeben.";
				return result;
			}
			if ((await _userManager.FindByEmailAsync(model.Email)) != null)
			{
				result.ErrorMessage = "Die E-Mail Adresse ist leider schon vergeben.";
				return result;
			}
			if (ModelState.IsValid)
			{
				var user = new ApplicationUser { UserName = model.UserName, Email = model.Email };
				IdentityResult identityResult = await _userManager.CreateAsync(user, model.Password);
				if (identityResult.Succeeded)
				{
					if (model.Email == "peter.ludwig@gmx.com" || model.Email == "carolinsina.ludwig@gmail.com")
					{
						await _userManager.AddToRoleAsync(user, "Admin");
						await _userManager.AddToRoleAsync(user, "Author");
						await _userManager.AddToRoleAsync(user, "Friend");
					}

					var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
					var callbackUrl = Url.Action("ConfirmEmail", "Account", new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
					await _emailSender.SendRegisterValidationMail(user.Email, "Ludwigs Rezepte - Registrierung abschließen", "Bitte klicke auf den folgenden Link, um deine Registrierung abzuschließen und dein Benutzerkonto freizuschalten:<br><br><a href=\"" + callbackUrl + "\">" + callbackUrl + "</a><br><br>Viel Spaß wünscht dir dein Team von http://ludwigs-rezepte.de");
					ViewBag.Link = callbackUrl;
					result.RequestSuccess = true;
					return result;
				}
			}
			return result;
		}

		private bool IsUserNameAllowed(string name)
		{
			switch (name.ToLower())
			{
				case "administrator":
				case "admin":
				case "moderator":
				case "ludwigsrezepte":
				case "ludwigs-rezepte":
				case "ludwigs rezepte":
				case "ludwigrezepte":
				case "ludwig-rezepte":
				case "ludwig rezepte":
				case "ludwigsrezept":
				case "ludwigs-rezept":
				case "ludwigs rezept":
				case "ludwigrezept":
				case "ludwig-rezept":
				case "ludwig rezept":
					return false;
			}
			return true;
		}
	}
}