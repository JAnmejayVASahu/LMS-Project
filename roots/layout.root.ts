import express from "express";
import {
  creatLayout,
  editLayout,
  getLayoutByType,
} from "../controller/layout.controller";
const layoutRouter = express.Router();
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

layoutRouter.post(
  "/create-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  creatLayout
);

layoutRouter.put(
  "/update-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  editLayout
);

layoutRouter.get("/get-all-layout", getLayoutByType);

export default layoutRouter;
