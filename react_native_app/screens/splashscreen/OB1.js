/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get("window");
class OB1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={styles.gradient} colors={['#3494E6', '#EC6EAD']} />
        <View>
          <Text>I'm the OB1 component</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    position:"absolute",
    width: width,
    height: height,
    opacity: 0.69
  },
});

export default OB1;
