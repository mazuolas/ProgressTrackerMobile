import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

class CheckIn extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Check In',
    tabBarIcon: ({ focused }) => (
      <Icon
        color= { focused ? 'royalblue' : 'white' }
        name='check-circle'
      />
    ),
  };

  render() {
    return (
      <Text>Check In Page</Text>
    );
  }
}

export default CheckIn;
