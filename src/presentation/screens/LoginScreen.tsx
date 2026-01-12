import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useAuth } from '../../app/providers/AuthProvider';
import { loginUseCase } from '../../app/di/authDependencies';
import { commonStyles } from '../styles/commonStyles';
import { typography } from '../theme/typography';
import { colors } from '../theme/colors';

type FirebaseAuthError = {
  code?: string;
  message?: string;
};

const getFriendlyError = (error: unknown): string => {
  if (error instanceof Error && error.message === 'Invalid credentials') {
    return 'Debes ingresar email y contrasena.';
  }

  if (typeof error === 'object' && error !== null) {
    const firebaseError = error as FirebaseAuthError;
    switch (firebaseError.code) {
      case 'auth/invalid-email':
      case 'auth/invalid-credential':
        return 'El correo no es valido.';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Credenciales incorrectas, revisa tus datos.';
      case 'auth/user-disabled':
        return 'Esta cuenta esta deshabilitada.';
      default:
        break;
    }
  }

  return 'No pudimos iniciar sesion. Intentalo de nuevo.';
};

export const LoginScreen = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onLogin = async () => {
    if (isSubmitting) {
      return;
    }

    setErrorMessage(null);

    try {
      setIsSubmitting(true);
      await loginUseCase.execute(email.trim(), password);
      login();
    } catch (error) {
      setErrorMessage(getFriendlyError(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.card}>
        <Text style={[typography.title, { marginBottom: 16 }]}>
          Welcome back
        </Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor={colors.textSecondary}
          style={commonStyles.input}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          value={email}
          editable={!isSubmitting}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.textSecondary}
          secureTextEntry
          style={commonStyles.input}
          value={password}
          editable={!isSubmitting}
          onChangeText={setPassword}
        />

        {errorMessage && (
          <Text style={commonStyles.errorText}>{errorMessage}</Text>
        )}

        <Pressable
          style={[
            commonStyles.button,
            isSubmitting && { opacity: 0.5 },
          ]}
          onPress={onLogin}
          disabled={isSubmitting}
        >
          <Text style={commonStyles.buttonText}>
            {isSubmitting ? 'Ingresando...' : 'Login'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
