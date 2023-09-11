import {StyleSheet} from 'react-native';
import {
  Colors,
  globalMetrics,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

const Styles = StyleSheet.create({
  container: {
    height: 'auto',
    paddingHorizontal: '5%',
  },
  row: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
  },
  questionNumberText: {
    fontSize: moderateScale(16),
    color: Colors.black,
  },
  asterisk: {
    marginLeft: horizontalScale(3),
    fontSize: moderateScale(16),
    color: Colors.red,
  },
  button: {
    height: verticalScale(40),
    width: horizontalScale(80),
    borderRadius: moderateScale(5),
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: moderateScale(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.black,
  },
  line: {
    alignSelf: 'center',
    marginVertical: verticalScale(10),
    borderWidth: globalMetrics.isAndroid
      ? moderateScale(1)
      : moderateScale(0.5),
    width: '92%',
  },
  camera: {
    height: moderateScale(32),
    width: moderateScale(32),
  },
  textInput: {
    paddingLeft: horizontalScale(5),
    marginTop: verticalScale(10),
    alignSelf: 'center',
    width: '100%',
    height: verticalScale(35),
    borderRadius: moderateScale(5),
    borderColor: Colors.black,
    borderWidth: globalMetrics.isAndroid
      ? moderateScale(1)
      : moderateScale(0.5),
  },
});

export default Styles;
