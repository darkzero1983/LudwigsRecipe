namespace LudwigsRecipe.Service.Models.Account
{
	public class UserInformationViewModel
	{
		public bool IsAuthenticated { get; set; }
		public bool IsFriend { get; set; }
		public bool IsAdmin { get; set; }
		public bool IsAuthor { get; set; }
		public string UserName { get; set; }
	}
}