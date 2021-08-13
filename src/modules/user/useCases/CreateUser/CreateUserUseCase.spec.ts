import { UsersRepositoryInMemory } from "@modules/user/Repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "@modules/user/Repositories/IUsersRepository"
import { AppError } from "@/errors/AppError";
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

    it("Should not be able to create a user if username already exist", async () => {
        const user1 = {
            username: "userTest",
            email: "test@test.com",
            password: "1234",
            amount: 10000,
        }

        const user2 = {
            username: "userTest",
            email: "test2@test.com",
            password: "1234",
            amount: 10000,
        }

        await createUserUseCase.execute(user1);

        await expect(
            createUserUseCase.execute(user2)
            ).rejects.toEqual(new AppError("Username already exist"));
    })

    it("Should not be able to create a user if email already exist", async () => {
        const user1 = {
            username: "userTest",
            email: "test@test.com",
            password: "1234",
            amount: 10000,
        }

        const user2 = {
            username: "userTest2",
            email: "test@test.com",
            password: "1234",
            amount: 10000,
        }

        await createUserUseCase.execute(user1);

        await expect(
            createUserUseCase.execute(user2)
            ).rejects.toEqual(new AppError("Email already exist"));
    })
})