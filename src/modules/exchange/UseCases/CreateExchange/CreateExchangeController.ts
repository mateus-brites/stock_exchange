import { Exchange } from "@modules/exchange/entities/Exchange";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateExchangeUseCase } from "./CreateExchangeUseCase";



class CreateExchangeController {
    async handle(request: Request, reponse: Response): Promise<Response>{
        const { company_name } = request.body;

        const createExchangeUseCase = container.resolve(CreateExchangeUseCase);

        const exchange = await createExchangeUseCase.execute({ company_name });

        return reponse.status(201).json(exchange)
    }
}

export { CreateExchangeController };