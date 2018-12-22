import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  movieContainer: {
    flex: 1,
    backgroundColor: Colors.black
  },
  aboutCinema: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  cinemaName: {
    fontSize: 16,
    color: Colors.snow,
    fontWeight: 'bold'
  },
  cinemaDetailView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10
  },
  cityName: {
    fontSize: 14,
    color: Colors.gold
  },
  cinemaContactView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
    width: wp('25%'),
    marginRight: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  line: {
    height: 2,
    marginLeft: 10,
    backgroundColor: Colors.snow
  },
  nowShowing: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.snow,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 15
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15
  },
  imageView: {
    width: wp('27%'),
    height: hp('20%'),
  },
  movieDetail: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: wp('40%'),
    marginRight: 50
  },
  movieTitleText: {
    fontSize: 16,
    color: Colors.snow,
    textAlign: 'center'
  },
  movieTimeText: {
    fontSize: 14,
    color: Colors.snow,
    textAlign: 'center'
  },
  smallLine: {
    height : 1,
    backgroundColor: Colors.deepgrey,
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 15
  }
})
