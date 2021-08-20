import { AppError } from "@/errors/AppError";
import { Company } from "@modules/company/entities/Company";
import { ICompanyRepository } from "@modules/company/Repositories/ICompanyRepository";
import { Exchange } from "@modules/exchange/entities/Exchange";
import { IExchangesRepository } from "@modules/exchange/repositories/IExchangesRepository";
import { IUsersRepository } from "@modules/user/Repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class SellExchangeUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("ExchangesRepository")
        private exchangesRepository: IExchangesRepository,
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
    ){}

    async execute(company_name: string, user_id: string): Promise<Exchange>{
        const user = await this.usersRepository.findById(user_id);
        const company = await this.companyRepository.findByName(company_name);
        
        if(!company){
            throw new AppError("Company not found!");
        }

        const exchange = await this.exchangesRepository.findExchangeByUser(company.company, user.username);

        if(!user){
            throw new AppError("User not found");
        }
        
        if(!exchange){
            throw new AppError("This user does not have this exchange");
        }       
        
        const newAmount = user.amount + company.exchange_value
        await this.usersRepository.changeAmount(user.id, newAmount);
        await this.exchangesRepository.changeOwner(exchange.id, null);
        const sell = await this.exchangesRepository.changeAvailable(exchange.id);

        return sell;
    }
}

export { SellExchangeUseCase };