using Microsoft.AspNetCore.Mvc;

namespace LudwigsRecipe.Web.Controllers
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}

		public IActionResult Layout()
		{
			return View();
		}
	}
}
