import { User } from "@modules/user/entities/User";
import { ICreate, IUsersRepository } from "../IUsersRepository";


class UsersRepositoryInMemory implements IUsersRepository {
    
    private repository: User[] = []

    async create({ amount, email, password, username, admin }: ICreate): Promise<User> {
        const user = new User();

        Object.assign(user, {
            amount,
            email,
            password,
            username,
            admin,
        });

        this.repository.push(user);

        return user;
    }

    async findByName(username: string): Promise<User> {
        return this.repository.find((user) => user.username === username);
    }

    async findByEmail(email: string): Promise<User> {
        return this.repository.find((user) => user.email === email);
    }

    async findById(id: string): Promise<User> {
        return this.repository.find((user) => user.id === id);
    }
    
}

export { UsersRepositoryInMemory };