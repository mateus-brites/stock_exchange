import { UsersRepositoryInMemory } from "@modules/user/Repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "@modules/user/Repositories/IUsersRepository"
import { CreateUserUseCase } from "./CreateUserUseCase";


let usersRepositoryInMemory: IUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("CreateUser",() => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    })

    it("Should be able to create a user", async () => {
        const data = {
            username: "userTest",
            email: "test@test.com",
            password: "1234",
            amount: 10000,
        }

        const user = await createUserUseCase.execute(data);

        expect(user).toHaveProperty("id");
    })
})