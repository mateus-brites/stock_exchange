import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { IUsersRepository, ICreate } from "./IUsersRepository"

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ amount, email, password, username, admin= false }: ICreate): Promise<User> {
        const user = this.repository.create({amount, admin, password, username, email});

        await this.repository.save(user);

        return user;
    }
}

export { UsersRepository };