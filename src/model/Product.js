import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [10, "Name is too short"],
      maxLength: [20, "Name is too long"],
      validate: {
        validator: () => {
          // write your validation logic here
          return true;
        },
        message: "Custom validation failed",
      },
    },
    price: {
      type: String,
      required: true,
      validate: {
        validator: (v) => {
          return v > 0;
        },
        message: "Price cannot be zero or negative.",
      },
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", ProductSchema);
export default Product;
