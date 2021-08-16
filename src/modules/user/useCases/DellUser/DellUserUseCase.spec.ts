import { UsersRepositoryInMemory } from "@modules/user/Repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "@modules/user/Repositories/IUsersRepository"
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { DellUserUseCase } from "./DellUserUseCase"


let dellUserUseCase: DellUserUseCase;
let usersRepositoryInMemory: IUsersRepository;
let createUserUseCase: CreateUserUseCase;
describe("Delete user", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        dellUserUseCase = new DellUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    })

    it("Should be able to delete a user", async () => {
        const data1 = {
            username: "userTest1",
            email: "test1@test.com",
            password: "1234",
            amount: 10000,
        }

        const data2 = {
            username: "userTest2",
            email: "test2@test.com",
            password: "1234",
            amount: 10000,
        }

        const user = await createUserUseCase.execute(data1);
        const user2 = await createUserUseCase.execute(data2);

        await dellUserUseCase.execute(user.id);

        const allUsers = await usersRepositoryInMemory.listAllUsers()

        expect(allUsers).toEqual([user2]);
    })
})