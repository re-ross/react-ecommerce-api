const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//ROUTE IMPORTS
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");
const orderRouter = require("./routes/orderRoutes");
const stripeRoute = require("./routes/stripeRoute");

//CONFIG
const port = process.env.PORT || 5000;
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connection successful."))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/payments", stripeRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
