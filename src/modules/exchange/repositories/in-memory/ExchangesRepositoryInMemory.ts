import { Company } from "@modules/company/entities/Company"
import { ICreateExchangesDTO } from "@modules/exchange/dtos/ICreateExchangesDTO"
import { Exchange } from "@modules/exchange/entities/Exchange"
import { IExchangesRepository } from "@modules/exchange/repositories/IExchangesRepository"

class ExchangesRepositoryInMemory implements IExchangesRepository {
    private repository: Exchange[] = []

    async create({ company_name }: ICreateExchangesDTO): Promise<Exchange> {
        const exchange = new Exchange()

        Object.assign(exchange, {
            company_name,
        })

        this.repository.push(exchange);

        return exchange;
    }
    findById(id: string): Promise<Exchange> {
        throw new Error("Method not implemented.")
    }
    findByCompany(company_name: string): Promise<Exchange[]> {
        throw new Error("Method not implemented.")
    }
}

export { ExchangesRepositoryInMemory }