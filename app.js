const { strict } = require("assert");
const express = require("express");
var pretty = require("express-prettify");

const app = express();
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;
const USERS = path.join(__dirname, "data", "users.json");
const userData = JSON.parse(fs.readFileSync(USERS, "utf-8", null, 2));

const userRouter = require("./routes/userRoutes");
app.use(pretty({ query: "pretty" }));
app.use(express.json());
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
