import { Request, Response } from "express";
import { container } from "tsyringe";
import { DellUserUseCase } from "./DellUserUseCase";




class DellUserController {
    async hanlde(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const dellUserUseCase = container.resolve(DellUserUseCase);

        await dellUserUseCase.execute(id);

        return response.status(200).send()
    }
}

export { DellUserController };