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
}

export { UsersRepository };