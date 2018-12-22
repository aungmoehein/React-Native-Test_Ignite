import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  row: {
    flex: 1,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    margin: 3,
    width: 100
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listView: {
    justifyContent: 'center'
  },
  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageStyle: {
    width: wp('31.7%'),
    height: hp('30%'),
    margin: 3
  }
})
