import { AuthRepository } from "../repositories/AuthRepository";

export class LoginUseCase {
    constructor(private readonly authRepository: AuthRepository) { }

    excute(email: string, password: string) {
        return this.authRepository.login(email, password);
    }
}
