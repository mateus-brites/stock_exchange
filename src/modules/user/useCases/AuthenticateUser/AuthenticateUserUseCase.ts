import { AppError } from "@/errors/AppError";
import { IUsersRepository } from "@modules/user/Repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";


@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) {}
    async execute(email: string, password: string): Promise<string> {
        const findUserByEmail = await this.userRepository.findByEmail(email);

        if (!findUserByEmail) {
            throw new AppError("Email or password incorrect");
        }

        const passwordHashed = findUserByEmail.password

        const passwordMath = await compare(password, passwordHashed);

        if(!passwordMath) {
            throw new AppError("Email or password incorrect");
        }

        const token = sign({}, "6eb51784aeb24e7fed5ce4fe9f27b0bd", {
            subject: findUserByEmail.id,
            expiresIn: "15d",
        })

        return token;
    }
}

export { AuthenticateUserUseCase };