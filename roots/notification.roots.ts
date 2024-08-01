import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { getNotifications, updateNotification } from "../controller/notification.controller";

const notificationRoutr = express.Router();

notificationRoutr.get(
  "/get-all-notify",
  isAuthenticated,
  authorizeRoles("admin"),
  getNotifications
);

notificationRoutr.put(
  "/update-notification/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  updateNotification
);

export default notificationRoutr;
