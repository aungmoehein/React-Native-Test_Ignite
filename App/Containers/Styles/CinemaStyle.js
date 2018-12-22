import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.black
  },
  row: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: Colors.snow,
    textAlign: 'left',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 20
  },
  label: {
    textAlign: 'left',
    color: Colors.snow
  },
  listContent: {
  },
  line: {
    height : 1,
    backgroundColor: Colors.deepgrey
  },
  boldLabelDetail: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: Colors.snow,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 30
  },
  movieCount: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 30,
    color: Colors.gold
  },
  accordionLine: {
    marginLeft: 30,
    height : 1,
    backgroundColor: Colors.deepgrey
  },
  accordionHeaderView: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  accordionArrow: {
    fontSize: 14,
    color: Colors.gold, 
    alignSelf: 'center', 
    marginRight: 20 
  }
})
