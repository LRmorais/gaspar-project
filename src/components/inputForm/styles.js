import { StyleSheet } from 'react-native';
import { theme } from '../../utils/style';

export const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    padding: 14,
    fontSize: 18,
    backgroundColor: theme.colors.secondary.main,
    marginBottom: theme.spacing(1.5),
    borderRadius: 5,
    color: theme.colors.blackText,
  },
  label: {
    fontSize: theme.spacing(2),
    color: theme.colors.secondary.main,
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  error: {
    color: theme.colors.error,
    fontSize: 17,
    marginBottom: 5,
  },
});
