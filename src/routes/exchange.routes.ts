import { ensureAdmin } from "@/middleware/ensureAdmin";
import { ensureAuthenticate } from "@/middleware/ensureAuthenticate";
import { CreateExchangeController } from "@modules/exchange/UseCases/CreateExchange/CreateExchangeController";
import { Router } from "express";

const exchangesRoutes = Router();

const createExchangeController = new CreateExchangeController()

exchangesRoutes.post("/", ensureAuthenticate, ensureAdmin, createExchangeController.handle)

export { exchangesRoutes }