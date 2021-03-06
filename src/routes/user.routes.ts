import { ensureAdmin } from "@/middleware/ensureAdmin"
import { ensureAuthenticate } from "@/middleware/ensureAuthenticate"
import { AuthenticateUserController } from "@modules/user/useCases/AuthenticateUser/AuthenticateUserController"
import { BuyExchangeController } from "@modules/user/useCases/BuyExchange/BuyExchangeController"
import { DellUserController } from "@modules/user/useCases/DellUser/DellUserController"
import { SellExchangeController } from "@modules/user/useCases/SellExchange/SellExchangeController"
import { Router } from "express"
import { CreateUserController } from "../modules/user/useCases/CreateUser/CreateUserController"

const userRoutes = Router()

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const dellUserController = new DellUserController;
const buyExchangeController = new BuyExchangeController();
const sellExchangeController = new SellExchangeController();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/auth", authenticateUserController.handle);
userRoutes.delete("/delete/:id", ensureAuthenticate, ensureAdmin, dellUserController.hanlde)
userRoutes.post("/buy/exchange/:company_name", ensureAuthenticate, buyExchangeController.handle);
userRoutes.post("/sell/exchange/:company_name", ensureAuthenticate, sellExchangeController.handle);

export { userRoutes }