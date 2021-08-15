import { CreateExchangeController } from "@modules/exchange/UseCases/CreateExchange/CreateExchangeController";
import { Router } from "express";

const exchangesRoutes = Router();

const createExchangeController = new CreateExchangeController()

exchangesRoutes.post("/", createExchangeController.handle)

export { exchangesRoutes }