import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  movieContainer: {
    flex: 1,
    backgroundColor: Colors.black
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },
  imageView: {
    width: wp('27%'),
    height: hp('20%'),
  },
  movieDetail: {
    flexDirection: 'column',
    marginTop: 3,
    marginBottom: 3,
    justifyContent: 'space-around',
    width: wp('63%')
  },
  readmoreStyle: {
    color: Colors.deepskyblue, 
    marginTop: 5
  },
  movieTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.snow,
    margin: 3,
  },
  movieDetailView:{
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 3,
    justifyContent: 'space-around'
  },
  movieDetailText: {
    fontSize: 14,
    color: Colors.steel,
    marginRight: 20,
    lineHeight: 25,
  },
  detailText: {
    fontSize: 14,
    color: Colors.deepskyblue,
    marginRight: 20,
    lineHeight: 25,
  },
  line: {
    height: 2,
    backgroundColor: Colors.steel,
    marginTop: 5,
    marginBottom: 5
  },
  movieStoryView: {
    flexDirection: 'column',
    margin: 3,
    justifyContent: 'space-around'
  },
  movieStoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:  Colors.silver,
    marginBottom: 15,
  },
  nowShowingCinemaView: {
    marginTop: 10,
    marginLeft: 15,
  },
  cinemaListView: {
    flexDirection: 'row',
    margin: 3,
  },
  cinemaDetail: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
    width: wp('82%')
  },
  cinemaName: {
    fontSize: 16,
    color: Colors.snow,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  city: {
    fontSize: 14,
    color: Colors.orange,
    marginBottom: 10,
  },
  times: {
    fontSize: 14,
    color: Colors.steel,
    marginRight: 20
  },
  phoneImageView: {
    justifyContent: "center",
    alignItems: 'center'
  },
  phone: {
    width: 20,
    height: 20
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },
  modal: {
    marginTop: hp('20%'),
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('90%'),
    height: hp('60%')
  },
  modalTrailor: {
    height: hp('20%')
  },
  modalMovieInfoView: {
    flexDirection: 'column',
    width: wp('85%')
  },
  modalMovieInfo: {
    fontSize: 16,
    color: Colors.snow,
    fontWeight: 'bold',
    marginLeft: 10
  },
  modalMovieDetailView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 7
  },
  modalMovieDetailTextView:{
    alignItems: 'flex-end',
    width: wp('40%'),
  },
  modalMovieDetailText: {
    color: Colors.snow,
    fontSize: 14,
    textAlign: 'right'
  },
  close : {
    color: Colors.black
  },
  closeButton: {
    width: wp('90%'),
    backgroundColor: Colors.gold
  }
})
