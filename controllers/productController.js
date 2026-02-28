// category value extracted from req.body to include while creating product
// update the promise to be async/await
// in createProduct added validation to check if product already exist
// modified limit value to take 10 as number not a string
const Product = require("../models/Product");

const createProduct = async (req, res) => {
  const { name, price, category} = req.body;

  if (!name || !price) {
    res.status(400).json({ msg: "Missing Data" });
  }
  const product = await Product.find({name});
  if(product){
    return res.status(200).json({ msg: "Product Already Created", data: product });
  }
  product = await Product.create({ name, price, category })
  res.status(201).json({ msg: "Product Created", data: product });

  // Product.create({ name, price }).then((product) => {
  //   res.status(201).json({ msg: "Product Created", data: product });
  // });
};

const getAllProducts = async (req, res) => {
  try {
    const limit = req.query.limit || 10;
    const products = await Product.find().limit(limit);
    res.status(200).json({ msg: "Products fetched", data: products });
  }catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { createProduct, getAllProducts };
