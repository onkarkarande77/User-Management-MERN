const express = require("express");

const router = express.Router();

const { insertUser,getUsers,deleteUser,updateUser } = require("../controllers/userController");

// POST API
router.post("/users", insertUser);

router.get("/users",getUsers);

router.delete("/users/:id",deleteUser);

router.put("/users/:id",updateUser)

module.exports = router;
