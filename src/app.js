import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./DB/connectDB.js";
import Product from "./model/Product.js";
dotenv.config();
const app = express();
let obj = {
  name: "Samsung A20",
  price: "2000",
  tags: ["apple", "mackbook", "silicon", "air"],
  color: "Black",
};
// 65f3bb9d897cd470dc746342
async function main() {
  // connect to the database
  connectDB();
  const product = new Product(obj);

  try {
    // await product.save();
    // console.log("New product is created id-", product.id);
    //NOTE - find the product

    const product = await Product.findById("65f3e0188bcc070be7a664b5");
    console.log(product);
    const updatedProduct = await Product.findByIdAndUpdate(
      "65f3e0188bcc070be7a664b5",
      { name: "Samsung A20 Pro", price: "10000" },
      {
        new: true,
      }
    );
    console.log(updatedProduct);

    // console.log("Tag count:", product.tagCount);
    // get product by methods
    // const sameProducts = await product.findWitheSameName();
    // console.log(sameProducts);
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
