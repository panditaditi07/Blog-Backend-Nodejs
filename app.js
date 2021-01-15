const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const blogRouter = require("./routes/blogRoutes");

app.use(express.json());
app.use("/blogs", blogRouter);

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
