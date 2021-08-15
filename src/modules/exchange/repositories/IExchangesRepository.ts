import { ICreateExchangesDTO } from "../dtos/ICreateExchangesDTO";
import { Exchange } from "../entities/Exchange";


interface IExchangesRepository {
    create({ company_name }: ICreateExchangesDTO): Promise<Exchange>;
    findById(id: string): Promise<Exchange>;
    findByCompany(company_name: string): Promise<Exchange[]>;
}

export { IExchangesRepository };