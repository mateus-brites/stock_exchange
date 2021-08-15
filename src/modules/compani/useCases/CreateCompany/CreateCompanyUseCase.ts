import { AppError } from "@/errors/AppError";
import { ICreateCompanyDTO } from "@modules/compani/dtos/ICreateCompanyDTO";
import { ICompanyRepository } from "@modules/compani/Repositories/ICompanyRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class CreateCompanyUseCase {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
    ){}
    async execute({ company, exchange_value }: ICreateCompanyDTO) {
        const findCompany = await this.companyRepository.findByName(company);

        if (findCompany) {
            throw new AppError("This company already exist");
        }

        const firm = await this.companyRepository.create({ company, exchange_value });

        return firm;
    }
}

export { CreateCompanyUseCase };