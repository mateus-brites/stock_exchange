import { CompanyRepository } from "@modules/company/Repositories/CompanyRepository";
import { ICompanyRepository } from "@modules/company/Repositories/ICompanyRepository";
import { ExchangesRepository } from "@modules/exchange/repositories/ExchangesRepository";
import { IExchangesRepository } from "@modules/exchange/repositories/IExchangesRepository";
import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/user/Repositories/IUsersRepository";
import { UsersRepository } from "../../modules/user/Repositories/UsersRepository";


container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);

container.registerSingleton<ICompanyRepository>("CompanyRepository", CompanyRepository);

container.registerSingleton<IExchangesRepository>("ExchangesRepository", ExchangesRepository);