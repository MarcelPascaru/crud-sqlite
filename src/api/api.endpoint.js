// Node modules
import express from "express";
import bodyParser from "body-parser";

// Custom services
import userService from "../entities/user.service.js";

// Router config
const router = express.Router();
router.use(bodyParser.json());

// Users endpoints
router.get("/users",  userService.getAllUsers);
router.post("/users", userService.createUser);

export default router;