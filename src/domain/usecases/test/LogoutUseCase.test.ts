import { LogoutUseCase } from '../LogoutUseCase';
import { AuthRepository } from '../../repositories/AuthRepository';

describe('LogoutUseCase', () => {
  it('should logout successfully', async () => {
    const authRepository: AuthRepository = {
      login: jest.fn(),
      logout: jest.fn(),
    };

    const logoutUseCase = new LogoutUseCase(authRepository);

    await logoutUseCase.execute();

    expect(authRepository.logout).toHaveBeenCalled();
  });
});
