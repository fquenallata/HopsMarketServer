import { Router } from "express";
import getAllUsersHandler from "../handlers/userHandler";

const usersRouter = Router();

usersRouter.get("/all", getAllUsersHandler);

export default usersRouter;
