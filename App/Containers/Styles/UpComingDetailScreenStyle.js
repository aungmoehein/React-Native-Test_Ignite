import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'
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
    alignItems: 'flex-start'
  },
  imageView: {
    width: wp('27%'),
    height: hp('20%'),
    marginTop: 6,
    marginRight: 6
  },
  movieDetail: {
    flexDirection: 'column',
    marginTop: 3,
    marginBottom: 3,
    justifyContent: 'space-around',
    width: wp('63%')
  },
  movieTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.snow,
    margin: 3,
  },
  movieTagLineView: {
    marginTop: 10,
    marginLeft: 3,
  },
  movieTagLineText: {
    fontSize: 13,
    color: Colors.snow,
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
  movieDetailText: {
    fontSize: 14,
    color: Colors.steel,
    marginRight: 20,
    lineHeight: 25,
  },
  readmoreStyle: {
    color: Colors.deepskyblue, 
    marginTop: 5
  },
  Trailor: {
    height: hp('20%')
  },
  MovieInfoView: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10
  },
  MovieInfo: {
    fontSize: 16,
    color: Colors.snow,
    fontWeight: 'bold',
  },
  MovieDetailView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  MovieDetailTextView:{
    alignItems: 'flex-end',
    width: wp('65%'),
  },
  MovieDetailText: {
    color: Colors.snow,
    fontSize: 14,
    textAlign: 'right'
  },
})
