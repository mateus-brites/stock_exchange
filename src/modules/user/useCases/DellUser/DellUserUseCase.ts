import { AppError } from "@/errors/AppError";
import { IUsersRepository } from "@modules/user/Repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class DellUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute(id: string): Promise<void> {
        const user = this.usersRepository.findById(id)
        
        if(!user) {
            throw new AppError("id does not exist");
        }

        await this.usersRepository.DellUser(id);
    }
}

export { DellUserUseCase };