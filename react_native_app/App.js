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

import { createStackNavigator } from 'react-navigation';

import MainScreen from './screens/MainScreen';

const app = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen
    }
  },
  {
    headerMode: 'none'
  });

export default app;
