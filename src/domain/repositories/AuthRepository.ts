import { User } from "../entities/User";

export interface AuthRepository{
    login(email: string, password: string): Promise<void>;
    logout(): Promise<void>;
}