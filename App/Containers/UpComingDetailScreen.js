import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, WebView } from 'react-native'
import { connect } from 'react-redux'
import ReadMore from 'react-native-read-more-text'
import { CachedImage } from 'react-native-cached-image'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/UpComingDetailScreenStyle'

class UpComingDetailScreen extends Component {

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
              <CachedImage style={styles.imageView} source={{uri: zatkar.image}} />
              <View style={styles.movieDetail}>
                <View>
                  <Text style={styles.movieTitleText}>{zatkar.movie_title}</Text>
                </View>
                <View style={styles.movieTagLineView}>
                  <Text style={styles.movieTagLineText}>{zatkar.movie_info.tagline}</Text>
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
            <View style={styles.movieStoryView}>
              <Text style={styles.movieStoryTitle}>Movie Trailor</Text>
            </View>
            <View style={styles.Trailor}>
            <WebView bounces={false}
                    scrollEnabled={false}
                    style={{backgroundColor: 'rgba(0,0,0,0)'}}
                    scalesPageToFit={true}
                    source={{ html: "<html><body style='background-color:transparent;'><iframe width='965' height='410' src='https://www.youtube.com/embed/"+zatkar.movie_info.movie_trailer_url+"' frameborder='0' allowfullscreen></iframe></body></html>" }} />
            </View>
                <View style={styles.MovieInfoView}>
                  <Text style={styles.MovieInfo}></Text>
                  <View style={styles.MovieDetailView}>
                    <Text style = {styles.MovieDetailText}>Language</Text>
                    <View style={styles.MovieDetailTextView}>
                    <Text style = {styles.MovieDetailText}>{zatkar.movie_info.language}</Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.MovieDetailView}>
                    <Text style = {styles.MovieDetailText}>Subtitle</Text>
                    <View style={styles.MovieDetailTextView}>
                    <Text style = {styles.MovieDetailText}>{zatkar.movie_info.subtitle}</Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.MovieDetailView}>
                    <Text style = {styles.MovieDetailText}>Director</Text>
                    <View style={styles.MovieDetailTextView}>
                    <Text style = {styles.MovieDetailText}>{zatkar.movie_info.director}</Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.MovieDetailView}>
                    <Text style = {styles.MovieDetailText}>Runtime</Text>
                    <View style={styles.MovieDetailTextView}>
                    <Text style = {styles.MovieDetailText}>{zatkar.movie_info.runtime} Mins</Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.MovieDetailView}>
                    <Text style = {styles.MovieDetailText}>Certification</Text>
                    <View style={styles.MovieDetailTextView}>
                    <Text style = {styles.MovieDetailText}>{zatkar.movie_info.certification}</Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.MovieDetailView}>
                    <Text style = {styles.MovieDetailText}>Genre</Text>
                    <View style={styles.MovieDetailTextView}>
                    <Text style = {styles.MovieDetailText}>
                      {
                        zatkar.movie_info.genre.map((gen,index)=>(
                          (index ? ', ' : '') + gen
                        ))
                      }
                      </Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.MovieDetailView}>
                    <Text style = {styles.MovieDetailText}>Casts</Text>
                    <View style={styles.MovieDetailTextView}>
                    <Text style = {styles.MovieDetailText}>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpComingDetailScreen)
