import { Response } from "express";
import { redis } from "../utils/redis";
import userModel from "../models/user.model";

// get user by id
export const getUserById = async (id: string, res: Response) => {
  const userJson = await redis.get(id);

  if (userJson) {
    const user = JSON.parse(userJson);
    res.status(201).json({
      success: true,
      user,
    });
  }
};

// Get All users
export const getAllUsersService = async (res: Response) => {
  const users = await userModel.find().sort({ createdAt: -1 });

  res.status(201).json({
    success: true,
    users,
  });
};

// update user role
export const updateUserRoleService = async (
  res: Response,
  id: string,
  role: string,
) => {
  const user = await userModel.findByIdAndUpdate(id, {role}, {now: true});
  // if (!user) {
  //   return res.status(404).json({
  //     success: false,
  //     message: "User not found",
  //   });
  // }
  // user.role = role;
  // await user.save();
  res.status(201).json({
    success: true,
    user,
  });
};