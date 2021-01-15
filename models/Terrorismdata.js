const mongoose = require("mongoose");
const { Schema } = mongoose;

const tastingSchema = new Schema(
  {
    eventid: String,
    iyear: String,
    imonth: String,
    iday: String,
    extended: String,
    country_txt: String,
    country: String,
    city: String,
    success: String,
    attacktype1_txt: String,
    targtype1_txt: String,
    nkill:String,
    gname:String,
    motive:String,
    summary:String,
    

 
  },
  { timestamps: true }
);

module.exports = mongoose.model("terrorismData", tastingSchema);
