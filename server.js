const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./configs/config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB Connected Succesfully");
  });

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
