import { AuthRepositoryImpl } from '../../data/datasource/AuthRepositoryImpl';
import { FirebaseAuthDataSource } from '../../data/datasource/FirebaseAuthDataSource';
import { LoginUseCase } from '../../domain/usecases/LoginUseCase';
import { LogoutUseCase } from '../../domain/usecases/LogoutUseCase';

const authDataSource = new FirebaseAuthDataSource();
const authRepository = new AuthRepositoryImpl(authDataSource);

export const loginUseCase = new LoginUseCase(authRepository);
export const logoutUseCase = new LogoutUseCase(authRepository);
