import { IExchangesRepository } from "@modules/exchange/repositories/IExchangesRepository"
import { ExchangesRepositoryInMemory } from "@modules/exchange/repositories/in-memory/ExchangesRepositoryInMemory";
import { CreateExchangeUseCase } from "./CreateExchangeUseCase"


let exchangesRepositoryInMemory: IExchangesRepository
let createExchangeUseCase: CreateExchangeUseCase;

describe("Create exchange", () => {
    beforeEach(() => {
        exchangesRepositoryInMemory = new ExchangesRepositoryInMemory()
        createExchangeUseCase = new CreateExchangeUseCase(exchangesRepositoryInMemory);
    })

    it("Should be able to create a new exchange", async () => {
        const exchange = await createExchangeUseCase.execute({
            company_name: "teste",
        });

        expect(exchange).toHaveProperty("id");
    })
})