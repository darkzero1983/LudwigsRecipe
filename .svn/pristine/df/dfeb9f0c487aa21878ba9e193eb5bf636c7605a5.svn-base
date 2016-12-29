using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using LudwigsRecipe.Service.Services.SeoTag;
using LudwigsRecipe.Service.Models.SeoTag;

namespace LudwigsRecipe.Web.Api.Recipe
{
	[Authorize(Roles = "Admin, Author")]
	[Route("api/cms/[controller]")]
	public class SeoTagsController : Controller
	{
		#region ctor
		private readonly ISeoTagService _seoTagService;

		public SeoTagsController(ISeoTagService seoTagService)
		{
			_seoTagService = seoTagService;
		}
		#endregion

		[HttpGet]
		public IEnumerable<SeoTagViewModel> Get()
		{
			return _seoTagService.LoadSeoTags();
		}
	}
}
