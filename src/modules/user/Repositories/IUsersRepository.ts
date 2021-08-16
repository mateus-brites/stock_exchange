import { User } from "../entities/User";

interface ICreate {
    username: string;
    email: string;
    password: string;
    admin?: boolean;
    amount: number;
}

interface IUsersRepository {
    create({amount, email, password, username, admin}: ICreate): Promise<User>;
    findByName(username: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
}

export { IUsersRepository, ICreate };