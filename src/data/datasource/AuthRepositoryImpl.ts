import { AuthRepository } from '../../domain/repositories/AuthRepository';
import { AuthLocalDataSource } from './AuthLocalDataSource';


export class AuthRepositoryImpl implements AuthRepository {
  constructor(private dataSource: AuthLocalDataSource) {}

  login(email: string, password: string): Promise<void> {
    return this.dataSource.login(email, password);
  }

  logout(): Promise<void> {
    return this.dataSource.logout();
  }
}
