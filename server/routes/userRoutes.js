import express from "express";
const userRouters = express.Router();

import { signin, signup } from "../controllers/userController.js";

userRouters.post("/signin", signin);
userRouters.post("/signup", signup);

export default userRouters;