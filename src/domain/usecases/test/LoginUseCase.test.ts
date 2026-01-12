import { LoginUseCase } from '../LoginUseCase';
import { AuthRepository } from '../../repositories/AuthRepository';

describe('LoginUseCase', () => {
  let authRepository: AuthRepository;
  let loginUseCase: LoginUseCase;

  beforeEach(() => {
    authRepository = {
      login: jest.fn(),
      logout: jest.fn(),
    };

    loginUseCase = new LoginUseCase(authRepository);
  });

  it('should login successfully with valid credentials', async () => {
    await loginUseCase.execute('test@mail.com', '123456');

    expect(authRepository.login).toHaveBeenCalledWith(
      'test@mail.com',
      '123456'
    );
  });

  it('should throw error if email is empty', async () => {
    await expect(
      loginUseCase.execute('', '123456')
    ).rejects.toThrow('Invalid credentials');
  });

  it('should throw error if password is empty', async () => {
    await expect(
      loginUseCase.execute('test@mail.com', '')
    ).rejects.toThrow('Invalid credentials');
  });
});
