import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../app/providers/AuthProvider';
import { loginUseCase } from '../../app/di/authDependencies';

export const LoginScreen = () => {
  const { login } = useAuth();

  const onLogin = async () => {
    await loginUseCase.execute('test@mail.com', '123456');
    login(); // actualiza estado global
  };

  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={onLogin} />
    </View>
  );
};
