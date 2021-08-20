import { User } from "@modules/user/entities/User";
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
    async findById(id: string): Promise<Exchange> {
        const exchange = await this.repository.findOne(id)
        return exchange;
    }
    async findByCompany(company_name: string): Promise<Exchange[]> {
        const exchanges = await this.repository.find({ company_name })
        return exchanges
    }

    async findAvailableExchangeByCompany(company: string): Promise<Exchange> {
        const availableExchange = await this.repository.findOne({
            where: [
                {company_name: company, available: 1},
            ]
          });

          return availableExchange;
    }

    async changeAvailable(id: string): Promise<Exchange> {
        const exchange = await this.repository.findOne(id);
        if(exchange.available === false){
            exchange.available = true;

            await this.repository.save(exchange);

            return exchange
        }

        exchange.available = false;

        await this.repository.save(exchange);

        return exchange
    }

    async changeOwner(exchange_id: string, username: string): Promise<void> {
        const exchange = await this.repository.findOne(exchange_id);

        exchange.owner = username;

        await this.repository.save(exchange);
    }

    async findExchangeByUser(company: string, username: string): Promise<Exchange> {
        const exchange = await this.repository.findOne({
            where: [
                {company_name: company, owner: username},
            ]
          });
        
        return exchange
    }
}

export { ExchangesRepository };