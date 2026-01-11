import { AuthRepository } from '../../domain/repositories/AuthRepository';
import { authApi } from '../api/AuthApi';

export class AuthRepositoryImpl implements AuthRepository {
    async login(email: string, password: string) {
        return authApi.login(email, password);
    }

    async logout() {
        return;
    }
}