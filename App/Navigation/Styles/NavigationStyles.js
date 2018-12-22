import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.gold
  },
  headerTitle: {
    fontWeight: 'bold',
    color: Colors.black,
    alignSelf: 'center',
    textAlign: 'center'
  },
  icon: {
    width: 20,
    height: 20,
  },
})
