import { AppError } from "@/errors/AppError";
import { ICompanyRepository } from "@modules/company/Repositories/ICompanyRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ChangeValueUseCase {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
    ){}

    async execute(id: string, value: number){
        const company = await this.companyRepository.findById(id)

        if(!company){
            throw new AppError("This company does not exist!");
        }

        const updatedCompany = await this.companyRepository.changeExchangeValue(company.id, value);

        return updatedCompany;
    }
}

export { ChangeValueUseCase };