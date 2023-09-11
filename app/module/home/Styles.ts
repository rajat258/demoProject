import {StyleSheet} from 'react-native';
import {Colors, verticalScale} from '../../theme';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(20),
    height: verticalScale(40),
    width: '95%',
    backgroundColor: Colors.yellow,
  },
});

export default Styles;
