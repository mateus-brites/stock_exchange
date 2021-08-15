import { inject, injectable } from "tsyringe";
import { ICreate, IUsersRepository } from "../../Repositories/IUsersRepository";
import { User } from "modules/user/entities/User"
import { AppError } from "@/errors/AppError";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({admin= false, username, password, email, amount}: ICreate): Promise<User>{
        const findUser = await this.usersRepository.findByName(username);

        if(findUser) {
            throw new AppError("Username already exist");
        }

        const findEmail = await this.usersRepository.findByEmail(email)

        if(findEmail){
            throw new AppError("Email already exist");
        }
        const user = await this.usersRepository.create({admin, username, password, email, amount});

        return user;
    }
}

export { CreateUserUseCase }