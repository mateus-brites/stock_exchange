import { Request, Response } from "express";
import { container } from "tsyringe";
import { SellExchangeUseCase } from "./SellExchangeUseCase";



class SellExchangeController {
    async handle(request: Request, response: Response){
        const { company_name } = request.params
        const user_id = request.user_id

        const sellExchangeUseCase = container.resolve(SellExchangeUseCase);

        const exchange = await sellExchangeUseCase.execute(company_name, user_id);

        return response.status(201).json(exchange);
    }
}

export { SellExchangeController };