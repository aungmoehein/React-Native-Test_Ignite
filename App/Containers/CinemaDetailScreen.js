import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, TouchableHighlight, Alert } from 'react-native'
import { connect } from 'react-redux'
import PhoneActionSheet from '../Components/ActionSheet'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CinemaDetailScreenStyle'
import {Images} from '../Themes'

class CinemaDetailScreen extends Component {

  alertAddress = (address) => {
    Alert.alert("Address",address,[
      {text: 'OK'},
    ])
  }

  render () {
    const { navigation } = this.props;
    const zatkar = navigation.getParam('zatkar',[])
    const movies = navigation.getParam('movies',[])
    return (
      <View style={styles.movieContainer}>
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.aboutCinema}>
            <Text style={styles.cinemaName}>{zatkar.name}</Text>
            <View style={styles.cinemaDetailView}>
              <Text style={styles.cityName}>{zatkar.city}</Text>
              <View style={styles.cinemaContactView}>
                <TouchableHighlight onPress={() => this.alertAddress(zatkar.address)}>
                  <Image style={styles.icon} source={Images.location}/>
                </TouchableHighlight>
                <PhoneActionSheet style={styles.icon} phones = { zatkar.phone.split("^")} />
              </View>
            </View>
          </View>
          <View style={styles.line}/>
          <Text style={styles.nowShowing}>Now Showing</Text>
          {
            zatkar.movies.map((movie,key)=>(
              <View key={key}>
              <View style={styles.infoView}>
                <Image style={styles.imageView} source={{uri: movies[movie][0].poster_large}} />
                <View style={styles.movieDetail}>
                  <View>
                    <Text style={styles.movieTitleText}>{movie}</Text>
                  </View>
                  <View>
                    <Text style={styles.movieTimeText}>{
                      movies[movie][0].movie_info.show_times.map(showTime => (
                        showTime.cinema_code == zatkar.cinema_code ? 
                        showTime.times.map((time,index)=>(<Text key={index}>{time} , </Text>)) : null 
                      ) )
                    }
                    </Text>
                  </View>
                </View>
                </View>
                <View style={styles.smallLine} />
              </View>
            ))
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(CinemaDetailScreen)
