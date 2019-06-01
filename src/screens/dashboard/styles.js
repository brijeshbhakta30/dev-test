import { StyleSheet } from 'react-native';
import constants from '../../constants/appConstants';
import colors from '../../helper/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
  },
  welcome: {
    fontSize: constants.fs(20),
    textAlign: 'center',
    margin: constants.hs(10),
  },
  logout: {
    backgroundColor: colors.errorRed,
  },
});

export default styles;
