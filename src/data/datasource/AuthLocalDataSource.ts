export class AuthLocalDataSource {
  async login(email: string, password: string): Promise<void> {
    // Simulación (luego Firebase / API real)
    return new Promise(resolve => setTimeout(resolve, 500));
  }

  async logout(): Promise<void> {
    return Promise.resolve();
  }
}
