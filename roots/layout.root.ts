import express from "express";
import { creatLayout } from "../controller/layout.controller";
const layoutRouter = express.Router();
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

layoutRouter.post(
  "/create-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  creatLayout
);

export default layoutRouter;
