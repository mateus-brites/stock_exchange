import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { IUsersRepository, ICreate } from "./IUsersRepository"

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ amount, email, password, username, admin }: ICreate): Promise<User> {
        const user = this.repository.create({amount, admin, password, username, email});

        await this.repository.save(user);

        return user;
    }

    async findByName(username: string): Promise<User> {
        const user = await this.repository.findOne({ username })
        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user =  await this.repository.findOne({ email });

        return user;
    }

    async findById(id: string): Promise<User> {
        const user =  await this.repository.findOne({ id });

        return user;
    }

    async DellUser(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async listAllUsers(): Promise<User[]> {
        const allUsers = await this.repository.find()
        return allUsers;
    }

    async changeAmount(id: string, amount: number): Promise<void> {
        const user = await this.repository.findOne(id);
        user.amount = amount;

        await this.repository.save(user);
    }
}

export { UsersRepository };