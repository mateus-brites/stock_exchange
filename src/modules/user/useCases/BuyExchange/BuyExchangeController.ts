import { Request, Response } from "express";
import { container } from "tsyringe";
import { BuyExchangeUseCase } from "./BuyExchangeUseCase";



class BuyExchangeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { company_name } = request.params
        const user_id = request.user_id

        const buyExchangeUseCase = container.resolve(BuyExchangeUseCase);

        const exchange = await buyExchangeUseCase.execute(company_name, user_id);

        return response.status(201).json(exchange);
    }
}

export { BuyExchangeController };