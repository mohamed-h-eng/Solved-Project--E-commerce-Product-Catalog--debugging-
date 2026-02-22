/*
-------change.log------------
updated db connection with async/await
fixed syntax error in app.listen (missing brackets)
*/
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());

// mongoose
//   .connect(process.env.DB_URL)
//   .then(() => console.log("DB Connected"))
//   .catch((err) => console.log(err));

async function DBconnection(){
  try{
    await mongoose.connect(process.env.DB_URL)
    console.log("db connected ...")
  }catch(error){
  console.log("db disconnected")
  }
}
DBconnection()

app.use("/api", productRoutes);

app.listen(3000, () => {
  console.log("Server Running")
});
