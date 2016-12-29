using LudwigsRecipe.Data.DataModels.Measurement;
using LudwigsRecipe.Data.DBContext;
using LudwigsRecipe.Data.DBContext.Models;
using System.Collections.Generic;
using System.Linq;

namespace LudwigsRecipe.Data.Repositories.MeasurementRepository
{
	public class MeasurementRepository : IMeasurementRepository
	{
		ApplicationDbContext ctx;

		public MeasurementRepository(ApplicationDbContext applicationDbContext)
		{
			ctx = applicationDbContext;
		}

		public int FindOrAddMeasurement(string measurement)
		{
			Measurement dbMeasurement = ctx.Measurements.FirstOrDefault(x => x.Name.ToLower() == measurement.ToLower().Trim());

			if(dbMeasurement == null)
			{
				dbMeasurement = new Measurement()
				{
					Name = measurement
				};
				ctx.Measurements.Add(dbMeasurement);
				ctx.SaveChanges();
			}
			return dbMeasurement.Id;
		}

		public List<IMeasurementData> LoadMeasurements()
		{
			List<IMeasurementData> measurements = new List<IMeasurementData>();

			List<Measurement> dbMeasurements = ctx.Measurements.OrderBy(x => x.Name).ToList();
			foreach (Measurement dbMeasurement in dbMeasurements)
			{
				measurements.Add(new MeasurementData() { 
					Id = dbMeasurement.Id,
					Name = dbMeasurement.Name
				});
			}
			return measurements;
		}
	}
}
