import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Router } from './app/router';
import LogIn from './app/login';

const StackRouter = StackNavigator({
  Home: {
    screen: LogIn
  },
  Navigate : {
    screen: Router,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  }
})

AppRegistry.registerComponent('ProgressTrackerMobile', () => StackRouter);
