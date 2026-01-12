import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../app/providers/AuthProvider';
import { logoutUseCase } from '../../app/di/authDependencies';

export const DashboardScreen = () => {
  const { logout } = useAuth();

  const onLogout = async () => {
    await logoutUseCase.execute();
    logout();
  };

  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};
