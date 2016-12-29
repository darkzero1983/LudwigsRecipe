using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using LudwigsRecipe.Service.Models.Measurement;
using LudwigsRecipe.Service.Services.MeasurementService;
using Microsoft.AspNetCore.Authorization;

namespace LudwigsRecipe.Web.Api.Recipe
{
	[Authorize(Roles = "Admin, Author")]
	[Route("api/cms/[controller]")]
	public class MeasurementsController : Controller
	{
		#region ctor
		private readonly IMeasurementService _measurementService;

		public MeasurementsController(IMeasurementService measurementService)
		{
			_measurementService = measurementService;
		}
		#endregion

		[HttpGet]
		public IEnumerable<MeasurementViewModel> Get()
		{
			return _measurementService.LoadMeasurements();
		}
	}
}
