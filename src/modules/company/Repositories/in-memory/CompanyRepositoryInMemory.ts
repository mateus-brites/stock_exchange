import { ICreateCompanyDTO } from "@modules/company/dtos/ICreateCompanyDTO";
import { Company } from "@modules/company/entities/Company";
import { ICompanyRepository } from "../ICompanyRepository";



class CompanyRepositoryInMemory implements ICompanyRepository {
    private repository: Company[] = [];

    async create({ company, exchange_value }: ICreateCompanyDTO): Promise<Company> {
        const newCompany = new Company();

        Object.assign(newCompany, {
            company,
            exchange_value
        })

        this.repository.push(newCompany);

        return newCompany;
    }
    async findByName(company: string): Promise<Company> {
        return this.repository.find(firm => firm.company === company);
    }
}

export { CompanyRepositoryInMemory };