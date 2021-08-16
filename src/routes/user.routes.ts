import { ensureAdmin } from "@/middleware/ensureAdmin"
import { ensureAuthenticate } from "@/middleware/ensureAuthenticate"
import { AuthenticateUserController } from "@modules/user/useCases/AuthenticateUser/AuthenticateUserController"
import { DellUserController } from "@modules/user/useCases/DellUser/DellUserController"
import { Router } from "express"
import { CreateUserController } from "../modules/user/useCases/CreateUser/CreateUserController"

const userRoutes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const dellUserController = new DellUserController

userRoutes.post("/", createUserController.handle);
userRoutes.post("/auth", authenticateUserController.handle);
userRoutes.delete("/delete/:id", ensureAuthenticate, ensureAdmin, dellUserController.hanlde)

export { userRoutes }