// use proper data type Number instead of String
// use enum for category with list of options to align with business logic
// added timestamps to schema to easily track products changes
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum:["General","Electronics","Appliances"],
    default: "General",
  },
},{timestamps:true});

// separated code to be readable, cleaner
const Product = mongoose.model("Product", productSchema);
module.exports = Product