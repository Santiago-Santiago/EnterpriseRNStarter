import { AuthLocalDataSource } from '../../data/datasource/AuthLocalDataSource';
import { AuthRepositoryImpl } from '../../data/datasource/AuthRepositoryImpl';
import { LoginUseCase } from '../../domain/usecases/LoginUseCase';
import { LogoutUseCase } from '../../domain/usecases/LogoutUseCase';

const authDataSource = new AuthLocalDataSource();
const authRepository = new AuthRepositoryImpl(authDataSource);

export const loginUseCase = new LoginUseCase(authRepository);
export const logoutUseCase = new LogoutUseCase(authRepository);
