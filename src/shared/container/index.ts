import { CompanyRepository } from "@modules/compani/Repositories/CompanyRepository";
import { ICompanyRepository } from "@modules/compani/Repositories/ICompanyRepository";
import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/user/Repositories/IUsersRepository";
import { UsersRepository } from "../../modules/user/Repositories/UsersRepository";


container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);

container.registerSingleton<ICompanyRepository>("CompanyRepository", CompanyRepository);