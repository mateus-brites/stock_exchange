import { ICreateCompanyDTO } from "../dtos/ICreateCompanyDTO";
import { Company } from "../entities/Company";



interface ICompanyRepository {
    create({ company, exchange_value }: ICreateCompanyDTO): Promise<Company>;
    findByName(company: string): Promise<Company>;
    changeExchangeValue(id: string, value: number): Promise<Company>
    findById(id: string): Promise<Company>;
}

export { ICompanyRepository };