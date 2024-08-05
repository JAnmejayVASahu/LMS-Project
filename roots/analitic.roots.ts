import express from "express";
import { getOrderAnalytics } from "../controller/analitic.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const analyticsRouter = express.Router();

analyticsRouter.get(
  "/get-users-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getOrderAnalytics
);

export default analyticsRouter;
