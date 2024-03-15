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
    tags: {
      type: [String],
    },
    color: {
      type: String,
      enum: ["Silver", "White", "Black"],
      default: "Silver",
    },
  },
  { timestamps: true }
);
// Make a virtual property
ProductSchema.virtual("tagCount").get(function () {
  return this.tags.length;
});
// we con create a method to get data
ProductSchema.methods.findWitheSameName = function (cb) {
  return mongoose.model("Product").find({ name: this.name }, cb);
};
const Product = mongoose.model("Product", ProductSchema);
export default Product;
