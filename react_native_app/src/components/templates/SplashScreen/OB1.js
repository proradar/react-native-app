/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get("window");
class OB1 extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={styles.gradient} colors={['#3494E6', '#EC6EAD']} />
        <View style={styles.container}>
          <View>
            <Text>I'm the OB1 component</Text>
          </View>
        </View>
        <View style={styles.skip}>
          <TouchableOpacity
            onPress={() => navigate("MainScreen")}>
            <Text>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    position:"absolute",
    width: width,
    height: height,
    opacity: 1
  },
  skip:{
    position: "absolute",
    alignSelf: "flex-end",
    marginTop: 600,
    width: 50,
    height: 50,
  }
});

export default OB1;
