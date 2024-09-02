import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controller/order.controller";
import { updateAccessToken } from "../controller/user.controller";
const orderRouter = express.Router();

orderRouter.post("/creat-order", isAuthenticated, createOrder);

orderRouter.post(
  "/get-all-order",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  getAllOrders
);

export default orderRouter;
