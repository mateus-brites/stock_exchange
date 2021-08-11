import { inject, injectable } from "tsyringe";
import { ICreate, IUsersRepository } from "../../Repositories/IUsersRepository";
import { User } from "modules/user/entities/User"


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({admin, username, password, email, amount}: ICreate): Promise<User>{
        const user = await this.usersRepository.create({admin, username, password, email, amount});

        return user;
    }
}

export { CreateUserUseCase }