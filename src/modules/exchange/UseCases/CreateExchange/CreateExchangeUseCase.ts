import { ICreateExchangesDTO } from "@modules/exchange/dtos/ICreateExchangesDTO";
import { IExchangesRepository } from "@modules/exchange/repositories/IExchangesRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class CreateExchangeUseCase {
    constructor(
        @inject("ExchangesRepository")
        private exchangeRepository: IExchangesRepository
    ){}

    async execute({ company_name }: ICreateExchangesDTO){
        const exchange = await this.exchangeRepository.create({ company_name });

        return exchange;
    }
}

export { CreateExchangeUseCase };