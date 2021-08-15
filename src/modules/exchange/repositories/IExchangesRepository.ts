import { Company } from "@modules/company/entities/Company";
import { ICreateExchangesDTO } from "../dtos/ICreateExchangesDTO";


interface IExchangesRepository {
    Create({ company_name, available }: ICreateExchangesDTO): Promise<Company>;
    findById(id: string): Promise<Company>;
    findByCompany(company_name: string): Promise<Company[]>;
}

export { Company };