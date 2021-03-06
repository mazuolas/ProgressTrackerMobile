import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Router } from './app/router';
import LogIn from './app/login';

const StackRouter = StackNavigator({
  Log: {
    screen: LogIn,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  Navigate : {
    screen: Router,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  }
})

AppRegistry.registerComponent('ProgressTrackerMobile', () => StackRouter);
