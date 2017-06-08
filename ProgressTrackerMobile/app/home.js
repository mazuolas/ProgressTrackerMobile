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

  // componentDidMount() {
  //   Linking.addEventListener('url', this.handleOpenURL);
  // }
  //
  // componentWillUnmount(){
  //   Linking.removeEventListener('url', this.handleOpenURL);
  // }
  //
  // handleOpenURL = ( event ) => {
  //   this.navigate(event.url);
  // }
  //
  // navigate = ( url ) => {
  //   const { navigate } = this.props.navigation;
  //   const route = url.replace(/.*?:\/\//g, '');
  //
  //   if (route === 'home') {
  //     navigate('Home')
  //   };
  // }

  render() {
    return (
      <Text>Home Page</Text>
    );
  }
}

export default Home;
