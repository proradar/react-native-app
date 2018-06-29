/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';

import OB1 from './OB1';
import OB2 from './OB2';
import OB3 from './OB3';

type Props = {};
class swiper extends Component<Props> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Swiper
        style={styles.wrapper}
        activeDot={
          <View
          style={{backgroundColor: '#fff', width: 7, height: 7, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 25,
        }}/>}
        dot={
          <View
          style={{backgroundColor: '#fff', opacity:0.40, width: 7, height: 7, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 25,
        }}/>}
        showsButtons={false}>
        <View style={styles.slide1}>
          <OB1 navigation={this.props.navigation}/>
        </View>
        <View style={styles.slide2}>
          <OB2 navigation={this.props.navigation}/>
        </View>
        <View style={styles.slide3}>
          <OB3 navigation={this.props.navigation}/>
        </View>
      </Swiper>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default swiper;
