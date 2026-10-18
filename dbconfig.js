const mongoose = require("mongoose");
const URL = process.env.MONGODB_URL;

const dbConnect = async () => {
  try {
    const res = await mongoose.connect(URL)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log("error in database connection is", error)
  }
}
module.exports = dbConnect

