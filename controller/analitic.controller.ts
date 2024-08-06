import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import userModel from "../models/user.model";
import { generate12MonthsData } from "../utils/analitic.generator";
import CourseModel from "../models/course.model";
import OrderModel from "../models/orderModel";

// get order analytics
export const getUserAnalytics = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await generate12MonthsData(userModel);
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

// get course analytics -- for admin
export const getCourseAnalytics = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const course = await generate12MonthsData(CourseModel);

      res.status(200).json({
        success: true,
        course,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

// get order analytics -- for admin
export const getOrderAnalytics = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const order = await generate12MonthsData(OrderModel);
      res.status(200).json({
        success: true,
        order,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
