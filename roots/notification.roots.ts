import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { getNotifications } from "../controller/notification.controller";

const notificationRoutr = express.Router();

notificationRoutr.get(
  "/get-all-notify",
  isAuthenticated,
  authorizeRoles("admin"),
  getNotifications
);

export default notificationRoutr;
