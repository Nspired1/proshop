import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

const app = express();
const PORT = process.env.PORT || 5000;
const IP = process.env.IP;

// use of protected environment variables
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

// get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// get one product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// to start just the node server at prompt in the ROOT DIRECTORY type "npm start"
// to start nodemon (continual saves/restarts server in dev mode) in the ROOT DIRECTORY type "npm run server"
// to start both the backend server and React frontend in the ROOT DIRECTORY type "npm run dev"
app.listen(
  PORT,
  IP,
  console.log(
    `Server running and listening in ${process.env.NODE_ENV} mode on PORT: ${PORT} and IP: ${IP}`
  )
);
