import { User } from "../entities/User";

interface ICreate {
    username: string;
    email: string;
    password: string;
    admin?: boolean;
    amount: number;
}

interface IUsersRepository {
    create({amount, email, password, username, admin}: ICreate): Promise<User>
}

export { IUsersRepository, ICreate };