import React, { Component } from 'react'
import { View, Text, ListView, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import API from '../Services/Api'
import Accordion from 'react-native-accordion'
import _ from 'lodash';

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/CinemaStyle'

class Cinema extends Component {

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
    CinemaDetail = []
    CinemaCodes = []
    CinemaPhones = []
    const api = API.create()
    const Cinemas = await api.getCinema()
    const ZatKar = await api.getShowingSchedule()
    // Cinemas.data.map((cinema,key)=>{
    //     CinemaDetails.push({
    //       city: cinema.city
    //     })
    // })
    Cities = [...new Set(Cinemas.data.map(cinema => cinema.city))];
    
    const CinemaDetailsByCities = _.groupBy(Cinemas.data,"city")

    const NowShowing = _.groupBy(ZatKar.data,'movie_title')

    Cities.map((city,key)=>(
      CinemaDetail.push({
        city: city,
        detail: CinemaDetailsByCities[city].sort(function(a, b){
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        }),
        movies: NowShowing
      })
    ));

    this.setState({
      dataSource: this.ds.cloneWithRows(CinemaDetail)
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
    var header = (
      <View style={styles.row}>
        <View style={styles.line} />
        <View style={styles.accordionHeaderView}>
          <Text style={styles.boldLabel}>{rowData.city}</Text>
          <Text style={styles.accordionArrow}>&#65310;</Text>
        </View>
      </View>
    )
    var content = (
      <View style={styles.row}>
      {
        rowData.detail.map((cinema_info,key)=>(
          <TouchableHighlight key={key} onPress={() => navigation.navigate("CinemaDetailScreen",{zatkar: cinema_info,movies: rowData.movies})}>
            <View>
              <Text style={styles.boldLabelDetail}>{cinema_info.name}</Text>
              <Text style={styles.movieCount}>{cinema_info.movies.length} Movies</Text>
              {
                key !== (rowData.detail.length-1) ? <View style={styles.accordionLine} /> : null 
              }
            </View>
          </TouchableHighlight>
        ))
      }
      </View>
    );

    return (
      <Accordion
        header={header}
        content={content}
        easing="easeOutCubic"
      />
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Cinema)
