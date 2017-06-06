import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements';

class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <Icon
        color= { focused ? 'royalblue' : 'white' }
        name='home'/>
    ),
  };

  render() {
    return (
      <Text>Home Page</Text>
    );
  }
}

export default Home;
