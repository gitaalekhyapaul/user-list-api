const router = require("express").Router();
const userController = require("../controllers/user");

router.get("/list", userController.getList);
router.get("/add", userController.getAdd);
router.post("/add", userController.postAdd);

module.exports = router;
