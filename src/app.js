import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./DB/connectDB.js";
import Product from "./model/Product.js";
import Review from "./model/Review.js";
dotenv.config();
const app = express();
// reviews
const review1 = {
  user: "Arifa Moni",
  rating: 5,
  body: "This is a good product I have ever bought!",
};

// 65f3bb9d897cd470dc746342
async function main() {
  // connect to the database
  connectDB();

  //* await Product.deleteMany({});

  try {
    // NOTE - create review  and Product
    const review = new Review(review1);
    console.log(review);
    // review.save();
    let obj = {
      name: "OnePlus Pro Max",
      price: "1000",
      tags: ["onePlus", "mackbook", "silicon", "air"],
      color: "Black",
      review: [review.id],
    };

    const product = new Product(obj);
    console.log(product);

    // await product.save();
    console.log("Product created");
    // NOTE - Update review
    // const product = await Product.findById("65f40d45c1857b89dd0b1d25");
    // const review = product.review.find((singleReview) =>
    //   console.log("Single review", singleReview)
    // );
    // console.log("Review", review);
    // console.log(" Review updated");
    // console.log("New product is created id-", product.id);
    //NOTE - find the product
    //NOTE - Best updated way

    // product.name = "Arifa Surface";
    // if (product.price > 1000) {
    //   product.price = 900;
    // }
    // review
    // product.review.push(review1);
    // save the product
    // product.save();

    console.log(product);
    //NOTE -Not  Best Practices updated way
    // const updatedProduct = await Product.findByIdAndUpdate(
    //   "65f3e0188bcc070be7a664b5",
    //   { name: "Samsung A20 Pro", price: "10000" },
    //   {
    //     new: true,
    //   }
    // );
    // console.log(updatedProduct);

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
