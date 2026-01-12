import { AuthRepository } from '../../domain/repositories/AuthRepository';
import { FirebaseAuthDataSource } from './FirebaseAuthDataSource';


export class AuthRepositoryImpl implements AuthRepository {
  constructor(private dataSource: FirebaseAuthDataSource) {}

  login(email: string, password: string): Promise<void> {
    return this.dataSource.login(email, password);
  }

  logout(): Promise<void> {
    return this.dataSource.logout();
  }
}
