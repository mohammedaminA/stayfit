const express = require("express");
const goalRouter = require("./routes/goalRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/login", (req, res) => {
  res.status(200).render("login");
});

app.use(express.json());

app.use("/api/v1/goals", goalRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl}`);
  err.status = "fail";
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
