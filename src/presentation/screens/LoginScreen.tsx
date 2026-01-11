import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../app/providers/AuthProvider';

export const LoginScreen = () => {
  const { login } = useAuth();

  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={login} />
    </View>
  );
};
