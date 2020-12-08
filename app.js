const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;
const USERS = path.join(__dirname, "data", "users.json");
const userData = JSON.parse(fs.readFileSync(USERS, "utf-8"));
app.get("/users", (req, res) => {
  res.send.json(userData);
});

app.get("/users/:id", (req, res) => {
  let user = userData.find((user) => {
    return user.id === req.params.id;
  });
  if (user) {
    res.status(200).json({
      status: "successful",
      data: user,
    });
  } else {
    res.status(200).json({
      status: "User not found",
    });
  }
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
