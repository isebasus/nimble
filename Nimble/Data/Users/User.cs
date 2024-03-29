using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Options;
using nimble.Data.Users.Items;

namespace nimble.Data.Users
{
    public class User
    {
        [BsonId]
        public ObjectId Id { get; set; }
        
        [BsonElement("userId")]
        public string UserId { get; set; }
        
        [BsonElement("firstName")]
        public string FirstName { get; set; }
        
        [BsonElement("lastName")]
        public string LastName { get; set; }
        
        [BsonElement("brand")]
        public string Brand { get; set; }
        
        [BsonElement("instagram")]
        public string Instagram { get; set; }
        
        [BsonElement("address")]
        public string Address { get; set; }
        
        [BsonElement("city")]
        public string City { get; set; }

        [BsonElement("country")]
        public string Country { get; set; }
        
        [BsonElement("zipCode")]
        public string ZipCode { get; set; }
        
        [BsonElement("phone")]
        public string Phone { get; set; }
        
        [BsonElement("status")]
        public string Status { get; set; }
        
        [BsonElement("itemIds")]
        [BsonDictionaryOptions(DictionaryRepresentation.ArrayOfArrays)]
        public Dictionary<string, List<string>> ItemIds { get; set; }
        
        [BsonElement("items")]
        public List<Item> Items { get; set; }
    }
}