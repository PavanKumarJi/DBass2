const MongoClient=require("mongodb").MongoClient
const empdata=require("./emp.json")
const connectionString="mongodb://localhost:27017"
MongoClient.connect(connectionString, async (err, db) => {
    if (err) {
      console.error("Error while connecting", err)
    }
    const database = db.db("Human_Resoure")
    const dbCollection = database.collection("emp")
  
    console.log("Connected to Mongo Database")
  
    const inserting = await database
      .collection("emp")
      .insertMany(empdata)
  
    console.log(inserting)
})