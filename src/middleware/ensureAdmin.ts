import { AppError } from "@/errors/AppError";
import { UsersRepository } from "@modules/user/Repositories/UsersRepository";
import { NextFunction, Request, Response } from "express";



export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    const id  = request.user_id

    const usersRepository = new UsersRepository()

    const user = await usersRepository.findById(id);

    if(!user.admin) {
        throw new AppError("This user is not a admin!");
    }

    next();
}