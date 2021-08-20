import { ICreateCompanyDTO } from "../dtos/ICreateCompanyDTO";
import { Company } from "../entities/Company";
import { ICompanyRepository } from "./ICompanyRepository";
import { getRepository, Repository } from "typeorm";



class CompanyRepository implements ICompanyRepository{
    private repository: Repository<Company>;

    constructor() {
        this.repository = getRepository(Company);
    }
    
    async create({ company, exchange_value }: ICreateCompanyDTO): Promise<Company> {
        const firm = this.repository.create({ company, exchange_value });

        await this.repository.save(firm);

        return firm;
    }
    async findByName(company: string): Promise<Company> {
        const firm = await this.repository.findOne({ company });
        return firm
    }

    async changeExchangeValue(id: string, value: number): Promise<Company> {
        const company = await this.repository.findOne({ id });

        company.exchange_value = value

        await this.repository.save(company);

        return company;
    }

    async findById(id: string): Promise<Company> {
        const company = await this.repository.findOne(id);

        return company;
    }
}

export { CompanyRepository };