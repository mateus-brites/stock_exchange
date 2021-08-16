import { AuthenticateUserController } from "@modules/user/useCases/AuthenticateUser/AuthenticateUserController"
import { Router } from "express"
import { CreateUserController } from "../modules/user/useCases/CreateUser/CreateUserController"

const userRoutes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

userRoutes.post("/", createUserController.handle);
userRoutes.post("/auth", authenticateUserController.handle);

export { userRoutes }