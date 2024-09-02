import express from "express";
import {
  creatLayout,
  editLayout,
  getLayoutByType,
} from "../controller/layout.controller";
const layoutRouter = express.Router();
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { updateAccessToken } from "../controller/user.controller";

layoutRouter.post(
  "/create-layout",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  creatLayout
);

layoutRouter.put(
  "/update-layout",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  editLayout
);

layoutRouter.get("/get-all-layout", getLayoutByType);

export default layoutRouter;
