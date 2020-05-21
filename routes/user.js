const router = require("express").Router();
const userController = require("../controllers/user");

router.get("/list", userController.getList);
router.post("/list", userController.postList);
router.get("/add", userController.getAdd);
router.post("/add", userController.postAdd);
router.post("/deleteUser", userController.deleteUser);

module.exports = router;
