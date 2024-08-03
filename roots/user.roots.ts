import express from "express";
import {
  registrationUser,
  activateUser,
  loginUser,
  logoutUser,
  updateAccessToken,
  getUserInfo,
  socialAuth,
  updateUserInfo,
  updatePassword,
  updateProfilePicture,
  getAllUsers,
  updateUserRole,
  deleteUser,
} from "../controller/user.controller.ts";
import { authorizeRoles, isAuthenticated } from "../middleware/auth.ts";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login-user", loginUser); // might be problem in log in code
userRouter.get(
  "/logout-user",
  isAuthenticated,
  authorizeRoles("admin"),
  logoutUser
);
userRouter.get("/refreshtoken", updateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.post("/socialAuth", socialAuth);
userRouter.put("/update-user-info", isAuthenticated, updateUserInfo);
userRouter.put("/update-user-password", isAuthenticated, updatePassword);
userRouter.put("/update-user-picture", isAuthenticated, updateProfilePicture);
userRouter.get(
  "/get-all-user",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllUsers
);

userRouter.put(
  "/update-and-route",
  isAuthenticated,
  authorizeRoles("admin"),
  updateUserRole
);

userRouter.delete(
  "/delete-user/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteUser
);

export default userRouter;
