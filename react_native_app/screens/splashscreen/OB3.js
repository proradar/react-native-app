/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';

const { width, height } = Dimensions.get("window");
class OB3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={styles.gradient} colors={['#C33764', '#1D2671']} />*/}
        <View style={styles.gradientBox}>
          <RadialGradient style={{width: width , height: height, opacity: 0.8, position: 'absolute'}}
                          colors={['#43C6AC','#F8FFAE','blue','white']}
                          stops={[0.1,0.4,0.3,0.75]}
                          center={[100,100]}
                          radius={200}/>
          <RadialGradient style={{width: width, height: height, opacity: 0.7, position: 'absolute'}}
                          colors={['black','red','blue','#43C6AC']}
                          stops={[0.2,0.5,0.3,0.75]}
                          center={[100,150]}
                          radius={200}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center',}}>
          <Text>I'm the OB3 component</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
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
  gradientBox: {
    flexDirection:"row",
    width: width,
    height: height,
    flex: 1,
    alignSelf: "flex-start",
    marginLeft: 0,
    borderWidth: 5,
    borderColor: "#000",
    position:"absolute"
  }
});

export default OB3;
