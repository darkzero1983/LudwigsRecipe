﻿namespace LudwigsRecipe.Service.Models.Account
{
	public class ResetPasswordViewModel
	{
		public string UserId { get; set; }
		public string Code { get; set; }
		public string Password { get; set; }
		public string ConfirmPassword { get; set; }
	}
}
