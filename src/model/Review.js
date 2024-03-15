import mongoose from "mongoose";
const ReviewSchema = new mongoose.Schema(
  {
    user: String,
    rating: Number,
    body: String,
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);
export default Review;
