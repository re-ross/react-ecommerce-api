const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/auth");

const port = process.env.PORT || 5000;

dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connection successful."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
