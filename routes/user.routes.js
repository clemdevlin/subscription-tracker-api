import { Router } from "express";

import authorize from "../middlewares/auth.middleware.js";
import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const userRouter = Router();

// Get all users (protected)
userRouter.get("/", authorize, getUsers);

// Get single user (protected)
userRouter.get("/:id", authorize, getUser);

// Create new user (public - used for registration)
userRouter.post("/", createUser);

// Update user (protected)
userRouter.put("/:id", authorize, updateUser);

// Delete user (protected)
userRouter.delete("/:id", authorize, deleteUser);

export default userRouter;
