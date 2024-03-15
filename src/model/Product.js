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
          return true;
        },
        message: "Custom validation failed",
      },
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", ProductSchema);
export default Product;
