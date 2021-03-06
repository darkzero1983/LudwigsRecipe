﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using LudwigsRecipe.Data.Repositories.CategoryRepository;
using LudwigsRecipe.Data.Repositories.IngredientListRepositories;
using LudwigsRecipe.Data.Repositories.IngredientRepository;
using LudwigsRecipe.Data.Repositories.HitCountRepositories;
using LudwigsRecipe.Data.Repositories.MeasurementRepository;
using LudwigsRecipe.Data.Repositories.SeoTagRepositories;
using LudwigsRecipe.Data.Repositories.RecipeRepository;
using LudwigsRecipe.Data.Repositories.UserRepositories;
using LudwigsRecipe.Service.Services.Category;
using LudwigsRecipe.Service.Services.IngredientService;
using LudwigsRecipe.Service.Services.HitCountService;
using LudwigsRecipe.Service.Services.MeasurementService;
using LudwigsRecipe.Service.Services.Navigation;
using LudwigsRecipe.Service.Services.Recipe;
using LudwigsRecipe.Service.Services.SeoTag;
using LudwigsRecipe.Service.Services.User;
using LudwigsRecipe.Data.DBContext;
using LudwigsRecipe.Data.DBContext.Models.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace LudwigsRecipe.Web
{
	public class Startup
	{
		public Startup(IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder()
				.SetBasePath(env.ContentRootPath)
				.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
				.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
				.AddEnvironmentVariables();
			Configuration = builder.Build();
		}

		public IConfigurationRoot Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			/*
				services.AddEntityFramework()
					.AddSqlServer()
					.AddDbContext<ApplicationDbContext>(options =>
						options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"])
						);*/

			services.AddEntityFramework()
					.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));

			services.AddIdentity<ApplicationUser, IdentityRole>(
				config => {
					config.Cookies.ApplicationCookie.LoginPath = "/Anmelden";
					config.Cookies.ApplicationCookie.LogoutPath = "/Abmelden";
					config.Cookies.ApplicationCookie.ExpireTimeSpan = new TimeSpan(356, 0, 0, 0, 0);
					config.Cookies.ApplicationCookie.SlidingExpiration = true;
					config.SignIn.RequireConfirmedEmail = true;
					config.Password.RequireDigit = false;
					config.Password.RequiredLength = 3;
					config.Password.RequireLowercase = false;
					config.Password.RequireUppercase = false;
					config.Cookies.TwoFactorRememberMeCookie.CookiePath = "/";
					config.User.RequireUniqueEmail = true;
				}
				)
				.AddEntityFrameworkStores<ApplicationDbContext>()
				.AddDefaultTokenProviders();
				
			// Add framework services.
			services.AddMvc();

			#region Repository
			services.AddScoped<ICategoryRepository, CategoryRepository>();
			services.AddScoped<IIngredientRepository, IngredientRepository>();
			services.AddScoped<IIngredientListRepository, IngredientListRepository>();
			services.AddScoped<IHitCountRepository, HitCountRepository>();
			services.AddScoped<IMeasurementRepository, MeasurementRepository>();
			services.AddScoped<IRecipeRepository, RecipeRepository>();
			services.AddScoped<ISeoTagRepository, SeoTagRepository>();
			services.AddScoped<IUserRepository, UserRepository>();
			#endregion

			#region Service
			services.AddScoped<ICategoryService, CategoryService>();
			services.AddScoped<IIngredientService, IngredientService>();
			services.AddScoped<IHitCountService, HitCountService>();
			services.AddScoped<IMeasurementService, MeasurementService>();
			services.AddScoped<INavigationService, NavigationService>();
			services.AddScoped<IRecipeService, RecipeService>();
			services.AddScoped<ISeoTagService, SeoTagService>();
			services.AddScoped<IUserService, UserService>();
			#endregion
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole(Configuration.GetSection("Logging"));
			loggerFactory.AddDebug();

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseBrowserLink();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}

			app.UseStaticFiles();

			app.UseIdentity();

			app.UseMvc(routes =>
			{
				routes.MapRoute(name: "recipe-print", template: "Drucken/Rezept/{id}/{amount}", defaults: new { controller = "Recipe", action = "Print" });
				routes.MapRoute(name: "default", template: "{controller=Home}/{action=Index}/{id?}");
				routes.MapRoute(name: "param1", template: "{param1?}", defaults: new { controller = "Home", action = "Index" });
				routes.MapRoute(name: "param2", template: "{param1?}/{param2?}", defaults: new { controller = "Home", action = "Index" });
				routes.MapRoute(name: "param3", template: "{param1?}/{param2?}/{param3?}", defaults: new { controller = "Home", action = "Index" });
				routes.MapRoute(name: "param4", template: "{param1?}/{param2?}/{param3?}/{param4?}", defaults: new { controller = "Home", action = "Index" });
			});

		}
	}
}
