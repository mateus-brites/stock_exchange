import { CompanyRepository } from "@modules/company/Repositories/CompanyRepository";
import { ICompanyRepository } from "@modules/company/Repositories/ICompanyRepository";
import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/user/Repositories/IUsersRepository";
import { UsersRepository } from "../../modules/user/Repositories/UsersRepository";


container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);

container.registerSingleton<ICompanyRepository>("CompanyRepository", CompanyRepository);