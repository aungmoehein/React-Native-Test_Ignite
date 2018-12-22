import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button, WebView } from 'react-native'
import { connect } from 'react-redux'
import { View, Image, Modal} from 'react-native'
import PhoneActionSheet from '../Components/ActionSheet'
import ReadMore from 'react-native-read-more-text'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ShowingDetailScreenStyle'

class ShowingDetailScreen extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  closeModal = () => {
      this.setState({modalVisible: false})
  }

  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={styles.readmoreStyle} onPress={handlePress}>
        Read more
      </Text>
    );
  }

  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={styles.readmoreStyle} onPress={handlePress}>
        Show less
      </Text>
    );
  }

  _handleTextReady = () => {
    // ...
  }

  render () {
    const { navigation } = this.props;
    const zatkar = navigation.getParam('zatkar',[])
    return (
      <View style={styles.movieContainer}>
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.infoView}>
              <Image style={styles.imageView} source={{uri: zatkar.image}} />
              <View style={styles.movieDetail}>
                <View>
                  <Text style={styles.movieTitleText}>{zatkar.movie_title}</Text>
                </View>
                <View style={styles.movieDetailView}>
                  <Text style={styles.movieDetailText}>{zatkar.movie_info.language}</Text>
                  <Text style={styles.movieDetailText}>{zatkar.movie_info.runtime} min</Text>
                  <Text style={styles.detailText} onPress={() => this.setModalVisible(!this.state.modalVisible)}>Detail</Text>
                </View>
              </View>
            </View>
            <View style={styles.line} />
            <View style={styles.movieStoryView}>
              <Text style={styles.movieStoryTitle}>Movie Story</Text>
                <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={this._renderTruncatedFooter}
                renderRevealedFooter={this._renderRevealedFooter}
                onReady={this._handleTextReady}>
                  <Text style={styles.movieDetailText}>{zatkar.movie_info.overview}</Text>
                </ReadMore>
            </View>
            <View style={styles.line} />
            <Text style={styles.movieStoryTitle}>Now Showing In</Text>
            <View style={styles.nowShowingCinemaView}>
            {
              zatkar.movie_info.show_times.map((showTime,key)=>(
              <View key={key}>
                <View style={styles.cinemaListView}>
                  <View style={styles.cinemaDetail}>
                    <Text style={styles.cinemaName}>{zatkar.cinema_info[showTime.cinema_code].name}</Text>
                    <Text style={styles.city}>{zatkar.cinema_info[showTime.cinema_code].city}</Text>
                    <Text style={styles.times}>{showTime.times.map((time,index)=>(<Text key={index}>{time} , </Text>))}</Text>
                  </View>
                  <View style={styles.phoneImageView}>
                    <PhoneActionSheet style={styles.phone} phones = { zatkar.cinema_info[showTime.cinema_code].phone.split("^")} />
                  </View>
                </View>
                <View style={styles.line} />
              </View>
              ))
            }
            </View>
            </KeyboardAvoidingView>
        </ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={styles.modal}>
            <ScrollView style={styles.container}>
              <KeyboardAvoidingView behavior='position'> 
                <View style={styles.modalTrailor}>
                <WebView bounces={false}
                    scrollEnabled={false}
                    style={{backgroundColor: 'rgba(0,0,0,0)'}}
                    scalesPageToFit={true}
                    source={{ html: "<html><body style='background-color:transparent;'><iframe width='965' height='410' src='https://www.youtube.com/embed/"+zatkar.movie_info.movie_trailer_url+"' frameborder='0' allowfullscreen></iframe></body></html>" }} />
                </View>
                <View style={styles.modalMovieInfoView}>
                  <Text style={styles.modalMovieInfo}></Text>
                  <View style={styles.modalMovieDetailView}>
                    <Text style = {styles.modalMovieDetailText}>Language</Text>
                    <View style={styles.modalMovieDetailTextView}>
                    <Text style = {styles.modalMovieDetailText}>{zatkar.movie_info.language}</Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.modalMovieDetailView}>
                    <Text style = {styles.modalMovieDetailText}>Subtitle</Text>
                    <View style={styles.modalMovieDetailTextView}>
                    <Text style = {styles.modalMovieDetailText}>{zatkar.movie_info.subtitle}</Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.modalMovieDetailView}>
                    <Text style = {styles.modalMovieDetailText}>Director</Text>
                    <View style={styles.modalMovieDetailTextView}>
                    <Text style = {styles.modalMovieDetailText}>{zatkar.movie_info.director}</Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.modalMovieDetailView}>
                    <Text style = {styles.modalMovieDetailText}>Runtime</Text>
                    <View style={styles.modalMovieDetailTextView}>
                    <Text style = {styles.modalMovieDetailText}>{zatkar.movie_info.runtime} Mins</Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.modalMovieDetailView}>
                    <Text style = {styles.modalMovieDetailText}>Certification</Text>
                    <View style={styles.modalMovieDetailTextView}>
                    <Text style = {styles.modalMovieDetailText}>{zatkar.movie_info.certification}</Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.modalMovieDetailView}>
                    <Text style = {styles.modalMovieDetailText}>Genre</Text>
                    <View style={styles.modalMovieDetailTextView}>
                    <Text style = {styles.modalMovieDetailText}>
                      {
                        zatkar.movie_info.genre.map((gen,index)=>(
                          (index ? ', ' : '') + gen
                        ))
                      }
                    </Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.modalMovieDetailView}>
                    <Text style = {styles.modalMovieDetailText}>Castes</Text>
                    <View style={styles.modalMovieDetailTextView}>
                    <Text style = {styles.modalMovieDetailText}>
                      {
                        zatkar.movie_info.cast.map((casts,index)=>(
                          (index ? ', ' : '') + casts
                        ))
                      }
                    </Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  </View>
              </KeyboardAvoidingView>
            </ScrollView>
            <View style={styles.closeButton}>
              <Button onPress={this.closeModal} style={styles.close} title="Close" />
            </View>
          </View>
          </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowingDetailScreen)
