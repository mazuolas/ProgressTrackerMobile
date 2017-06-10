import React, { Component } from 'react';
import { Text, View, Button, ActivityIndicator, Image, Linking } from 'react-native';
import { Icon, SocialIcon } from 'react-native-elements';
import PageTitle from './page_title';
import * as style from './styles/profile.js';

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

  logout(){
    //send delete to session
  }
  render() {
    if (!this.state.user || !this.state.strikes) {
      return <PageTitle title="Profile" />

    }

    return (
      <View>
        <PageTitle title={`${this.state.user.fname} ${this.state.user.lname}`} />
        <View>
          <View style={style.topProfile}>
            <Image
              style={{width: 150, height: 150}}
              source={{uri: this.state.user.picture_url}}
              />
            <SocialIcon type='linkedin' onPress={() => Linking.openURL(this.state.user.linkedin_url)} />
            <SocialIcon type='github-alt' onPress={() => Linking.openURL(this.state.user.github_url)} />
          </View>

        <Text style={style.strikes}>Strikes</Text>
        </View>

        <View style={style.logoutButtonStyle}>
          <Button title={"Logout"} onPress={this.logout} color={'white'}/>
        </View>
      </View>
    );
  }
}

export default Profile;
