import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AboutScreenStyle'
import {Images} from '../Themes'

class AboutScreen extends Component {

  static navigationOptions = {
    title: 'Zat Kar',
  };

  render () {
    return (
      <View style={styles.movieContainer}>
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.aboutCompanyView}>
              <Image style={styles.appLogo} source = {Images.launch}/>
              <Text style={styles.aboutCompany}>© 2018 xxxxxxxxxxxx Ltd</Text>
              <Text style={styles.aboutCompany}>Version : 2.0</Text>
              <View style={styles.lineBreak}/>
            </View>
            <View style={styles.aboutAppView}>
              <Text style={styles.aboutCompany}>Zat Kar - The fastest way to find out movies, show times and cinemas</Text>
            </View>
            <View style={styles.linkView}>
              <View style={styles.rateUsView}>
                <Image style={styles.appStoreLogo} source={Images.appstore}/>
                <Text style={styles.blueText}>Rate Us On Appstore</Text>
              </View>
              <View style={styles.rateUsView}>
                <Image style={styles.thirdPartyLogo} source={Images.phone}/>
                <Image style={styles.thirdPartyLogo} source={Images.facebook} />
                <Image style={styles.thirdPartyLogo} source={Images.mail}/>
              </View>
              <Text style={styles.blueText}>Open Source License</Text>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)
