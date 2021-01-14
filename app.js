const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const blogRouter = require("./routes/userRoutes");

app.use(express.json());
app.use("/blogs", blogRouter);

app.listen(5000, () => {
  console.log("server running on PORT 5000");
});
