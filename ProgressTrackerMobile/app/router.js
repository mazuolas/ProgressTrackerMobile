import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { AppRegistry } from 'react-native';
import Home from './home';
import Classmates from './classmates';
import Stats from './stats';
import Profile from './profile';
import CheckIn from './check_in';

export const Router = TabNavigator({
  Home: {
    screen: Home,
  },
  Stats: {
    screen: Stats,
  },
  CheckIn: {
    screen: CheckIn,
  },
  Classmates: {
    screen: Classmates,
  },
  Profile: {
    screen: Profile,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showLabel: false,
    style: {
    backgroundColor: '#C00A0A',
    },
  },
});
