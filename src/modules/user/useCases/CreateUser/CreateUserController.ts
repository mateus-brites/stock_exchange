import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";



class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {admin, username, password, email, amount} = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        const user = await createUserUseCase.execute({admin, username, password, email, amount});

        return response.status(201).json(user);
    }
}

export { CreateUserController }