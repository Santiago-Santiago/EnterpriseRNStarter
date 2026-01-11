import { AuthRepository } from '../repositories/AuthRepository';

export class LoginUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(email: string, password: string): Promise<void> {
    if (!email || !password) {
      throw new Error('Invalid credentials');
    }

    await this.authRepository.login(email, password);
  }
}
