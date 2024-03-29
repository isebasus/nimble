﻿using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using Newtonsoft.Json;
using nimble.Data.Colors;
using nimble.Data.Colors.Result.Colors;
using nimble.Data.CompanyData;
using nimble.Data.CompanyData.Brand;
using nimble.Data.CompanyData.Item;
using nimble.Data.Merch;
using RestSharp;

namespace nimble.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MerchController : ControllerBase
    {
        private static IMongoCollection<CompanyData> _data;
        
        public MerchController(IMongoClient client)
        {
            IMongoDatabase database = client.GetDatabase("nimble");
            _data = database.GetCollection<CompanyData>("merch");
        }

        [Route("/api/getCompanies")]
        [HttpGet]
        public string GetCompanies()
        {
            var documents = _data.Find(_ => true).ToList();
            List<GeneralInformation> info = new List<GeneralInformation>();
            foreach (CompanyData data in documents)
            {
                GeneralInformation cI = new GeneralInformation();
                cI.CompanyName = data.Company;
                cI.Description = data.Description;
                cI.MinimumUnits = data.MinimumUnits;
                cI.Logo = data.Logo;
                cI.Ratings = data.Ratings;
                
                info.Add(cI);
            }
            return JsonConvert.SerializeObject(info);
        }

        [Route("/api/getProductionCompany")]
        [HttpPost]
        public string GetProductionCompany([FromForm] IFormCollection data)
        {
            string name = JsonConvert.DeserializeObject<string>(data["name"]);
            CompanyData company = _data.Find(x => x.Link == name).FirstOrDefault();
            
            if (company == null)
            {
                return JsonConvert.SerializeObject("Error: Cannot find Company.");
            }
            return JsonConvert.SerializeObject(company);
        }

        [Route("/api/getProductionMerch")]
        [HttpPost]
        public string GetMerch([FromForm] IFormCollection data)
        {
            string name = JsonConvert.DeserializeObject<string>(data["name"]);
            string merch = JsonConvert.DeserializeObject<string>(data["merch"]);
            
            CompanyData company = _data.Find(x => x.Link == name).FirstOrDefault();
            if (company == null)
            {
                return JsonConvert.SerializeObject("Error: Cannot find Company.");
            }

            var brand = company.Brands.Find(x => x.Link == merch);
            if (brand == null)
            {
                return JsonConvert.SerializeObject("Error: Cannot find Company.");
            }
            return JsonConvert.SerializeObject(brand);
        }
    }
}


