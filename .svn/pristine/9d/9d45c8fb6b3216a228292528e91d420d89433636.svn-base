using DarkZero.Core.Extensions;
using LudwigsRecipe.Service.Models.Api;
using LudwigsRecipe.Service.Models.Category;
using LudwigsRecipe.Service.Services.Category;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;

namespace LudwigsRecipe.Web.Api.CMS
{
	[Route("api/cms/[controller]")]
	public class CategoryController : Controller
	{
		#region ctor
		private readonly ICategoryService _categoryService;

		public CategoryController(ICategoryService categoryService)
		{
			_categoryService = categoryService;
		}
		#endregion

		[HttpGet]
		public CategoryEditViewModel Get()
		{
			return _categoryService.LoadCategoryEditViewModel();
		}

		[HttpPost]
		public FormResult Post([FromBody]CategoryEditViewModel model)
		{
			FormResult result = new FormResult();
			result.RequestSuccess = false;
			if(model == null)
			{
				return result;
			}
			try
			{
				FormResult validationResult = IsModelValid(model);
				if (!validationResult.RequestSuccess)
				{
					return validationResult;
				}
				_categoryService.SaveCategories(model);
				result.SuccessMessage = "Die Anpassungen wurden erfolgreich gespeichert";
				result.RequestSuccess = true;
			}
			catch (Exception e)
			{
				result.ErrorMessage = "Beim Speichern ist ein Fehler aufgetreten.";
			}
			return result;
		}

		private FormResult IsModelValid(CategoryEditViewModel model)
		{
			FormResult result = new FormResult();

			foreach (CategoryViewModel category in model.Categories)
			{
				if (category.Url != category.Url.BuildUrl())
				{
					result.RequestSuccess = false;
					result.ErrorMessage = "Die Url \"" + category.Url + "\" ist keine valide URL. \"" + category.Url.BuildUrl() + "\" wäre korrekt";
					return result;
				}
				foreach (SubCategoryViewModel subCategory in category.SubCategories)
				{
					if (subCategory.Url != subCategory.Url.BuildUrl())
					{
						result.RequestSuccess = false;
						result.ErrorMessage = "Die Url \"" + subCategory.Url + "\" ist keine valide URL. \"" + subCategory.Url.BuildUrl() + "\" wäre korrekt";
						return result;
					}
				}
			}
			result.RequestSuccess = true;
			return result;
		}
	}
}
