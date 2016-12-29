using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System.IO;

namespace LudwigsRecipe.Web.Api.Recipe
{
	[Authorize(Roles = "Admin, Author")]
	[Route("api/CMS/Recipe/Upload")]
	public class TeaserImageUploadController : Controller
	{
		#region ctor
		private IHostingEnvironment _environment;

		public TeaserImageUploadController(IHostingEnvironment environment)
		{
			_environment = environment;
		}
		#endregion

		[HttpPost]
		public void Post(IFormFile file)
		{
			var uploads = Path.Combine(_environment.WebRootPath, "upload");

			if (file.Length > 0)
			{
				var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
				
				using (var fileStream = new FileStream(Path.Combine(uploads, file.FileName), FileMode.Create))
				{
					file.CopyTo(fileStream);
				}
			}
		}
	}
}