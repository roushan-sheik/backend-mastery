import mongoose from "mongoose";
function getMongoString() {
  let connectionStr = process.env.MONGO_URI;
  connectionStr = connectionStr.replace("<username>", process.env.USER_NAME);
  connectionStr = connectionStr.replace(
    "<password>",
    process.env.USER_PASSWORD
  );
  connectionStr = `${connectionStr}/${process.env.DATABASE_NAME}?${process.env.DATABASE_URL_QUERY}`;
  return connectionStr;
}

export const connectDB = async () => {
  const uri = getMongoString();
  await mongoose.connect(uri).then(() => {
    console.log("Database connected");
  });
};
