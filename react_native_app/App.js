/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainScreen from './screens/MainScreen';
import swiper from './screens/swiper';

const splashscreen = createStackNavigator(
  {
    swiper: {
      screen: swiper
    }
  },
  {
    headerMode: 'none'
  }
);

const app = createSwitchNavigator(
  {
    SplashScreen: {
      screen: splashscreen
    },
    MainScreen: {
      screen: MainScreen
    }
  },
  {
    headerMode: 'none'
  });

export default app;
