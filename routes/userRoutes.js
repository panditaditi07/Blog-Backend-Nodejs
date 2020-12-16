const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getById,
  getByQuery,
  patchRequest,
  updateBlog,
} = require("../controllers/userController");
router.route("/users").get(getAllUsers);
router.route("/getByQuery").get(getByQuery);
router.route("/users/:id").get(getById).patch(patchRequest, updateBlog);
module.exports = router;
