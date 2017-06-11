import React, { Component } from 'react';
import { Text, View, Button, Platform, Linking } from 'react-native';
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
    console.log(this.props.navigation.state);
    return (
      <Text>Home Page</Text>
    );
  }
}

export default Home;
