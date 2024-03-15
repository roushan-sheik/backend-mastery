import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./DB/connectDB.js";
import Product from "./model/Product.js";
dotenv.config();
const app = express();
let obj = {
  name: "arifa moni",
};
async function main() {
  // connect to the database
  connectDB();
  const product = new Product(obj);
  try {
    await product.save();
    console.log("New product is created id-", product.id);
  } catch (error) {
    console.log(error.message);
  }
}
main();
const PORT = process.env.PORT || 3000;
// after connected to the database than listen the app
app.listen(PORT, () => {
  console.log(`Server is running on port:http://localhost:${PORT}`);
});
