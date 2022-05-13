import {StyleSheet} from 'react-native';
import {theme} from '../../utils/style';

export const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    padding: 16,
    fontSize: 20,
    backgroundColor: theme.colors.secondary.main,
    marginBottom: theme.spacing(2),
    borderRadius: 5,
    color: theme.colors.secondary.main,
  },
  label: {
    fontSize: theme.spacing(3),
    color: theme.colors.secondary.main,
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
});
