import { getRepository, Repository } from "typeorm";
import { ICreateExchangesDTO } from "../dtos/ICreateExchangesDTO";
import { Exchange } from "../entities/Exchange";
import { IExchangesRepository } from "./IExchangesRepository";


class ExchangesRepository implements IExchangesRepository {
    private repository: Repository<Exchange>;

    constructor() {
        this.repository = getRepository(Exchange);
    }

    async create({ company_name }: ICreateExchangesDTO): Promise<Exchange> {
        const exchange = this.repository.create({ company_name });

        await this.repository.save(exchange);

        return exchange;
    }
    findById(id: string): Promise<Exchange> {
        throw new Error("Method not implemented.");
    }
    findByCompany(company_name: string): Promise<Exchange[]> {
        throw new Error("Method not implemented.");
    }
}

export { ExchangesRepository };