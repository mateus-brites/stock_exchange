import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";



class CreateCompanyController {
    async handle(request: Request, response: Response) {
        const { company, exchange_value } = request.body

        const createCompanyUseCase = container.resolve(CreateCompanyUseCase);

        const firm = await createCompanyUseCase.execute({ company, exchange_value});

        return response.status(201).json(firm);
    }
}

export { CreateCompanyController };