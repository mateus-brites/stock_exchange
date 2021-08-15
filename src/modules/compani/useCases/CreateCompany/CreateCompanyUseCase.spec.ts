import { AppError } from "@/errors/AppError";
import { CompanyRepositoryInMemory } from "@modules/compani/Repositories/in-memory/CompanyRepositoryInMemory"
import { CreateCompanyUseCase } from "./CreateCompanyUseCase"


let companyRepositoryInMemory: CompanyRepositoryInMemory
let createCompanyUseCase: CreateCompanyUseCase;

describe("Create Company", () => {
    beforeEach(() => {
        companyRepositoryInMemory = new CompanyRepositoryInMemory();
        createCompanyUseCase = new CreateCompanyUseCase(companyRepositoryInMemory);
    })

    it("Should be able to create a new company", async () => {
        const dataCompany = {
            company: "teste",
            exchange_value: 15.32,
        }

        const firm = await createCompanyUseCase.execute(dataCompany);

        expect(firm).toHaveProperty("id");
    }
    )

    it("SHould not be able to create a existing company", async () => {
        const dataCompany1 = {
            company: "teste",
            exchange_value: 15.32,
        }

        const dataCompany2 = {
            company: "teste",
            exchange_value: 15.32,
        }

        await createCompanyUseCase.execute(dataCompany1);

        await expect(
            createCompanyUseCase.execute(dataCompany2)
        ).rejects.toEqual( new AppError("This company already exist"));
    })
})