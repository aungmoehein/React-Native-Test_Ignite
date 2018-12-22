import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  movieContainer: {
    flex: 1,
    backgroundColor: Colors.black
  },
  aboutCompanyView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp('50%')
  },
  appLogo: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center'
  },
  aboutCompany: {
    fontSize: 14,
    color: Colors.snow,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  lineBreak: {
    marginBottom: 5,
    marginTop: 5,
    height: 1,
    backgroundColor: Colors.deepgrey,
  },
  aboutAppView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp('90%')
  },
  linkView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 7
  },
  appStoreLogo: {
    width: 40,
    height: 40,
    marginRight: 7,
    marginTop: 7,
    marginBottom: 7
  },
  thirdPartyLogo: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginTop: 7,
    marginBottom: 7
  },
  rateUsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  blueText: {
    fontSize: 14,
    color: Colors.deepskyblue,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 7,
    marginTop: 7
  }
})
