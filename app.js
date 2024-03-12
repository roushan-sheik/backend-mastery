import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/posts", (req, res) => {
  res.send(`<h2>Hello world Express</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto excepturi soluta error! Consectetur
            tenetur eveniet eius saepe, quam eaque laborum deleniti repellat delectus facilis atque expedita repudiandae
            voluptatibus incidunt?</p></div>`)});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: http:localhost:${PORT}`);
});
