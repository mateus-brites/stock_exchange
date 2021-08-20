import { Request, Response } from "express";
import { container } from "tsyringe";
import { ChangeValueUseCase } from "./ChangeValueUseCase";



class ChangeValueController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        const { value } = request.body;

        const changeValueUseCase = container.resolve(ChangeValueUseCase);

        const company = await changeValueUseCase.execute(id, value);

        return response.status(201).json(company);
    }
}

export { ChangeValueController };