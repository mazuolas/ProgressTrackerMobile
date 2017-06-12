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
    activeBackgroundColor: 'white',
    showLabel: false,
    tabStyle: {
      borderWidth: 0,
      borderColor: 'white',
      shadowColor: 'white'
    },
    style: {
      backgroundColor: '#C00A0A',
      height: 70,
      borderWidth: 0,
      borderColor: 'white',
      shadowColor: 'white',
      borderTopWidth: 0
    },
  },
});
