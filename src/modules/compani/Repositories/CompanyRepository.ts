import { ICreateCompanyDTO } from "../dtos/ICreateCompanyDTO";
import { Company } from "../entities/Company";
import { ICompanyRepository } from "./ICompanyRepository";



class CompanyRepository implements ICompanyRepository{
    create({ company, exchange_value }: ICreateCompanyDTO): Promise<Company> {
        throw new Error("Method not implemented.");
    }
    findByName(company: string): Promise<Company> {
        throw new Error("Method not implemented.");
    }
}

export { CompanyRepository };