import React, { Component } from 'react'
import { View, Text, ListView, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import API from '../Services/Api'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/ShowingViewStyle'

class ShowingView extends Component {

  static navigationOptions = {
    title: 'Zat Kar',
  };

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = []

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    this.ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: this.ds.cloneWithRows(dataObjects)
    }
    this.getData()
  }

  getData = async () => {
    ZatKarMyar = []
    CinemaCodes = []
    CinemaDetails = []
    CinemaPhones = []
    const api = API.create()
    const ZatKars = await api.getShowingSchedule()
    const Cinemas = await api.getCinema()
    Cinemas.data.map((cinemaCode,key)=>{
      CinemaCodes[key] = cinemaCode.cinema_code
    })
    Cinemas.data.map((cinema,key)=>{
      CinemaDetails[CinemaCodes[key]] = cinema
      CinemaPhones[key] = cinema.phone.split("^")
    })
    ZatKars.data.map((zatkar,key)=>{
      ZatKarMyar.push({
        movie_title: zatkar.movie_title,
        image: zatkar.poster_large,
        movie_info: zatkar.movie_info,
        cinema_info: CinemaDetails,
        cinema_phone: CinemaPhones
      })
    })
    this.setState({
      dataSource: this.ds.cloneWithRows(ZatKarMyar)
    })
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData, navigation) {
    return (
      <TouchableHighlight onPress={() => navigation.navigate("ShowingDetailScreen",{zatkar: rowData})}>
        <Image style={styles.imageStyle} source={{uri: rowData.image}}/>
      </TouchableHighlight>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState(prevState => ({
          dataSource: prevState.dataSource.cloneWithRows(newProps.someData)
        }))
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  // Render a footer.
  renderFooter = () => {
    return (
      <Text> - Footer - </Text>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.listView}>
          <ListView
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={(data) => this.renderRow(data,this.props.navigation)}
            enableEmptySections
            pageSize={15}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowingView)
