import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

class Profile extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
      <Icon
        color= { focused ? 'royalblue' : 'white' }
        name='perm-identity'
      />
    ),
  };

  render() {
    return (
      <Text>Profile Page</Text>
    );
  }
}

export default Profile;
