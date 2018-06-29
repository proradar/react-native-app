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

import MainScreen from './src/components/templates/Main/MainScreen';
import swiper from './src/components/templates/SplashScreen/swiper';

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
