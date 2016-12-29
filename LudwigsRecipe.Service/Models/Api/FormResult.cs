namespace LudwigsRecipe.Service.Models.Api
{
	public class FormResult
	{
		public bool RequestSuccess { get; set; }
		public int NewId { get; set; }
		public string SuccessMessage { get; set; }
		public string ErrorMessage { get; set; }
	}
}
