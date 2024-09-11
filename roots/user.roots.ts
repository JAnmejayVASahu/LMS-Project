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
userRouter.get("/me", updateAccessToken, isAuthenticated, getUserInfo);
userRouter.post("/socialAuth", updateAccessToken, socialAuth);
userRouter.put("/update-user-info", isAuthenticated, updateUserInfo);
userRouter.put(
  "/update-user-password",
  updateAccessToken,
  isAuthenticated,
  updatePassword
);
userRouter.put(
  "/update-user-picture",
  updateAccessToken,
  isAuthenticated,
  updateProfilePicture
);
userRouter.get(
  "/get-all-user",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  getAllUsers
);

userRouter.put(
  "/update-and-route",
  updateAccessToken,
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

userRouter.put(
  "/update-user",
  isAuthenticated,
  authorizeRoles("admin"),
  updateUserRole
);

export default userRouter;
