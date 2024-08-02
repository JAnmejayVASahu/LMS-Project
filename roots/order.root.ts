import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controller/order.controller";
const orderRouter = express.Router();

orderRouter.post("/creat-order", isAuthenticated, createOrder);

orderRouter.post(
  "/get-all-order",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllOrders
);

export default orderRouter;
