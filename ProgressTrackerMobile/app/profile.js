import React, { Component } from 'react';
import { Text, View, Button, ActivityIndicator, Image } from 'react-native';
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

  constructor(props){
    super(props);
    this.state = {
      user: null,
      strikes: null
    }
    fetch(`https://progresstrackerapi.herokuapp.com/api/user/me`)
      .then(response => (response.json()))
      .then(responseJson => (this.setState({user: responseJson})))
      .catch(error => (console.log(error)))

    fetch(`https://progresstrackerapi.herokuapp.com/api/strikes`)
      .then(response => (response.json()))
      .then(responseJson => (this.setState({strikes: responseJson})))
      .catch(error => (console.log(error)))
  }
  render() {
    if (!this.state.user || !this.state.strikes) {
      return <ActivityIndicator color={'#C00A0A'} size={'large'}/>
    }
    let header = <Text
    style={{
      padding: 30,
      backgroundColor: '#C00A0A',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    }}
    >{this.state.user.fname} {this.state.user.lname}</Text>
    return (
      <View>
        {header}
        <View>
          <Image
          style={{width: 150, height: 150}}
          source={{uri: this.state.user.picture_url}}
          />
          <Text>Strikes</Text>
        </View>
      </View>
    );
  }
}

export default Profile;
