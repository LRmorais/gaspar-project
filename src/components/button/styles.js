import {StyleSheet} from 'react-native';
import {theme} from '../../utils/style';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    marginVertical: theme.spacing(2),
  },
  text: {
    fontSize: theme.spacing(3),
    color: theme.colors.secondary.main,
  },
  simpleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
    marginVertical: theme.spacing(2),
  },
});
