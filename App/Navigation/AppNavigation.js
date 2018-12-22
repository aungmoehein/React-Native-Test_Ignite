import {createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import ShowingView from '../Containers/ShowingView'
import UpComingView from '../Containers/UpComingView'
import Cinema from '../Containers/Cinema'
import ShowingDetailScreen from '../Containers/ShowingDetailScreen'
import UpComingDetailScreen from '../Containers/UpComingDetailScreen'
import CinemaDetailScreen from '../Containers/CinemaDetailScreen';
import AboutScreen from '../Containers/AboutScreen';
import React from 'react'
import {Image} from 'react-native'

import styles from './Styles/NavigationStyles'
import { Colors, Images } from '../Themes/'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ShowingView: { screen: ShowingView },
  ShowingDetailScreen: { screen: ShowingDetailScreen },
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'ShowingView',
  defaultNavigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerBackTitle: "Back"
  }
})

const SecondaryNav = createStackNavigator({
  UpComingView: { screen: UpComingView },
  UpComingDetailScreen: {screen: UpComingDetailScreen},
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'UpComingView',
  defaultNavigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerBackTitle: "Back"
  }
})

const CinemaNav = createStackNavigator({
  Cinema: {screen: Cinema},
  CinemaDetailScreen: {screen: CinemaDetailScreen}
},{
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'Cinema',
  defaultNavigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerBackTitle: "Back"
  }
})

const AboutNav = createStackNavigator({
  AboutScreen: {screen: AboutScreen},
},{
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'AboutScreen',
  defaultNavigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerBackTitle: "Back"
  }
})

const RootNavigator = createBottomTabNavigator({
  SHOWING: {
    screen: PrimaryNav,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={Images.movie}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      )}
  },
  UPCOMING: {
    screen: SecondaryNav,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={Images.calendar}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      )}
  },
  Cinema:{
    screen: CinemaNav,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={Images.ticket}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      )}
  },
  About:{
    screen: AboutNav,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={Images.user}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      )}
  }
},{
  initialRouteName: 'SHOWING',
  defaultNavigationOptions: {
    headerTitle: 'Zat Kar',
    headerStyle: styles.headerTitle
  },tabBarOptions: {
      backgroundColor: Colors.gold,
      activeTintColor: Colors.black,
      activeBackgroundColor: Colors.gold,
      inactiveBackgroundColor: Colors.gold,
      inactiveTintColor: Colors.grey,
      labelStyle: {
        fontSize: 12
      }
    }
  }
)

export default createAppContainer(RootNavigator)
