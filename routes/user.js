const router = require("express").Router();
const userController = require("../controllers/user");

router.get("/list", userController.getList);
router.post("/list", userController.postList);
router.get("/add", userController.getAdd);
router.post("/add", userController.postAdd);
router.delete("/deleteUser", userController.deleteUser);
router.get("/editUser", userController.getEditUser);
router.put("/editUser", userController.postEditUser);

module.exports = router;
