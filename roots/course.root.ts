import express, { Router } from "express";
import {
  addAnswer,
  addQuestion,
  addReplyToReview,
  addReview,
  deleteCourse,
  editCourse,
  generateVideoUrl,
  getAdminAllCourse,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controller/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { updateAccessToken } from "../controller/user.controller";

const courseRouter: Router = express.Router();

courseRouter.get(
  "/get-admin-Course",
  isAuthenticated,
  authorizeRoles("admin"),
  getAdminAllCourse
);
courseRouter.post(
  "/create-course",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  uploadCourse
);

courseRouter.put(
  "/course-edit/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  editCourse
);

courseRouter.get("/get-course/:id", getSingleCourse);

courseRouter.get("/get-all-course", getAllCourses);

courseRouter.get(
  "/get-course-content/:id",
  updateAccessToken,
  isAuthenticated,
  getCourseByUser
);

courseRouter.put("/question", updateAccessToken, isAuthenticated, addQuestion);

courseRouter.put("/add-answer", updateAccessToken, isAuthenticated, addAnswer);

courseRouter.put(
  "/add-review/:id",
  updateAccessToken,
  isAuthenticated,
  addReview
);

courseRouter.put(
  "/add-replay-review",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  addReplyToReview
);

courseRouter.put(
  "/get-all-course",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  getAllCourses
);

courseRouter.post("/getVdoCipherOTP", generateVideoUrl);

courseRouter.delete(
  "/delete-course/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  deleteCourse
);

export default courseRouter;
