import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

import cors from "cors";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connectado a la BD!!!!");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(cors());
app.use(express.json());


app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});


app.use("/api/products", productRouter);
app.use("/api/users", userRouter);




app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0", () => {
  console.log(`serve at http://localhost:${port}`);
});
