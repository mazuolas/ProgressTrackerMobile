import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements';

class Classmates extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Classmates',
    tabBarIcon: ({ focused }) => (
      <Icon
        color= { focused ? 'royalblue' : 'white' }
        name='people'
      />
    ),
  };

  render() {
    return (
      <Text>Classmates Page</Text>
    );
  }
}

export default Classmates;
