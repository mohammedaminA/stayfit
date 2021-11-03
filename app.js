const express = require("express");
const { status } = require("express/lib/response");
const goalRouter = require("./routes/goalRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();

app.use(express.json());

app.use("/api/v1/goals", goalRouter);
// app.use("/api/v1/users", userRouter);

module.exports = app;
