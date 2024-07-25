import express, { Router } from "express";
import { addAnswer, addQuestion, editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controller/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

const courseRouter: Router = express.Router();

courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRoles("admin"),
  uploadCourse
);

courseRouter.put(
  "/course-edit/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  editCourse
);

courseRouter.get(
  "/get-course/:id",
  getSingleCourse
);

courseRouter.get(
  "/get-all-course",
  getAllCourses
);

courseRouter.get(
  "/get-course-content/:id",
  isAuthenticated,
  getCourseByUser
);

courseRouter.put(
  "/question",
  isAuthenticated,
  addQuestion
);

courseRouter.put(
  "/add-answer",
  isAuthenticated,
  addAnswer
);

export default courseRouter;
