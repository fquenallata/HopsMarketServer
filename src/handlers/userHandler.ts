import { Request, Response } from "express";
import { getAllUsers, getUsersByName } from "../controllers/userController";

const getAllUsersHandler = async (req: Request, res: Response) => {
  const { name } = req.query;
  try {
    if (typeof name === "string") {
      const userByName = await getUsersByName(name);
      res.status(200).json(userByName);
    } else {
      const response = await getAllUsers();
      res.status(200).json(response);
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default getAllUsersHandler;
