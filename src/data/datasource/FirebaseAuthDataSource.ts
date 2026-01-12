import { getApp } from '@react-native-firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  FirebaseAuthTypes,
} from '@react-native-firebase/auth';

export class FirebaseAuthDataSource {
  private auth: FirebaseAuthTypes.Module = getAuth(getApp());

  async login(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
  }
}
