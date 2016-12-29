using Microsoft.AspNetCore.Mvc;
using LudwigsRecipe.Service.Models.Navigation;
using LudwigsRecipe.Service.Services.Navigation;


namespace LudwigsRecipe.Web.Api.Navigation
{
	[Route("api/Navigation/[controller]")]
	public class LoadController : Controller
	{
		#region ctor
		private readonly INavigationService _navigationService;

		public LoadController(INavigationService navigationService)
		{
			_navigationService = navigationService;
		}
		#endregion

		[HttpGet]
		public NavigationViewModel Get(bool cmsVersion)
		{
			return _navigationService.LoadNavigation(User.IsInRole("Friend"), User.IsInRole("Admin") || User.IsInRole("Author"), cmsVersion);
		}
	}
}
