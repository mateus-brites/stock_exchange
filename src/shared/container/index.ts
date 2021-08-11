import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/user/Repositories/IUsersRepository";
import { UsersRepository } from "../../modules/user/Repositories/UsersRepository";


container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);