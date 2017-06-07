import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements';

class Stats extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Stats',
    tabBarIcon: ({ focused }) => (
      <Icon
        color= { focused ? 'royalblue' : 'white' }
        name='insert-chart'/>
    ),
  };

  render() {
    return (
      <Text>Stats Page</Text>
    );
  }
}

export default Stats;
