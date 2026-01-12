import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    justifyContent: 'center',
  },

  card: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: 12,
    elevation: 4, // Android shadow
  },

  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.md,
    color: colors.textPrimary,
  },

  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: '600',
  },

  errorText: {
    color: colors.danger,
    marginBottom: spacing.sm,
  },
});
