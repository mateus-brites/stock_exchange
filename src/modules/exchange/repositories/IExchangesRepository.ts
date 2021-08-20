import { User } from "@modules/user/entities/User";
import { ICreateExchangesDTO } from "../dtos/ICreateExchangesDTO";
import { Exchange } from "../entities/Exchange";


interface IExchangesRepository {
    create({ company_name }: ICreateExchangesDTO): Promise<Exchange>;
    findById(id: string): Promise<Exchange>;
    findByCompany(company_name: string): Promise<Exchange[]>;
    findAvailableExchangeByCompany(company: string): Promise<Exchange>
    changeAvailable(id: string): Promise<Exchange>;
    changeOwner(exchange_id: string, username: string): Promise<void>;
    findExchangeByUser(company: string, username: string): Promise<Exchange>;
}

export { IExchangesRepository };