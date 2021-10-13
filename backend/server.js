import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000;
const IP = process.env.IP;

dotenv.config();
connectDB();
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

// handle Not Found routes
app.use(notFound);

// custom error handler
app.use(errorHandler);

// to start just the node server at prompt in the ROOT DIRECTORY type "npm start"
// to start nodemon (continual saves/restarts server in dev mode) in the ROOT DIRECTORY type "npm run server"
// to start both the backend server and React frontend in the ROOT DIRECTORY type "npm run dev"
app.listen(
  PORT,
  IP,
  console.log(
    `Server running and listening in ${process.env.NODE_ENV.toUpperCase()} mode on PORT: ${PORT} and IP: ${IP}`
      .yellow.bold
  )
);
