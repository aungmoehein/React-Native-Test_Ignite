import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, Image } from 'react-native'
import styles from '../Containers/Styles/ShowingDetailScreenStyle'
import ActionSheet from 'react-native-actionsheet'
import { Images } from '../Themes'
import call from 'react-native-phone-call'

class PhoneActionSheet extends Component {

  showActionSheet = () => {
    this.ActionSheet.show()
  }

  render () {
    const { phones } = this.props
    let args = []
    phones.map((phone)=>(
      args.push({
        number: phone,
        prompt: false
      })
    ))
    return (
      <View>
        <TouchableHighlight onPress={this.showActionSheet}>
          <Image style={this.props.style} source={Images.phone}/>
        </TouchableHighlight>
        <ActionSheet
            ref={o => this.ActionSheet = o}
            options={['cancel'].concat(phones)}
            cancelButtonIndex={0}
            title={"Choose Phone Number"}
            onPress={(index) => { if (index != 0) call(args[index]).catch(console.error) }}
            />
      </View>
    )
  }
}
export default PhoneActionSheet