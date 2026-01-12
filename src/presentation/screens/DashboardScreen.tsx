import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useAuth } from '../../app/providers/AuthProvider';
import { logoutUseCase } from '../../app/di/authDependencies';
import { commonStyles } from '../styles/commonStyles';
import { typography } from '../theme/typography';
import { colors } from '../theme/colors';

export const DashboardScreen = () => {
  const { logout } = useAuth();

  const onLogout = async () => {
    await logoutUseCase.execute();
    logout();
  };

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.card}>
        <Text style={[typography.title, { marginBottom: 8 }]}>
          Dashboard
        </Text>

        <Text style={{ color: colors.textSecondary, marginBottom: 24 }}>
          You are successfully logged in.
        </Text>

        <Pressable
          style={[commonStyles.button, { backgroundColor: colors.danger }]}
          onPress={onLogout}
        >
          <Text style={commonStyles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};
