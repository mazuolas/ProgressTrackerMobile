import React, { Component } from 'react';
import { Text, View, Button, ActivityIndicator, Image, Linking, ListView } from 'react-native';
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
      .then(this.buildList.bind(this))
      .catch(error => (console.log(error)))
  }

  logout(){
    //send delete to session
  }
  renderFooter(){
    return (
      <View style={style.logoutButtonStyle}>
        <Button title={"Logout"} onPress={this.logout} color={'white'}/>
      </View>
    )
  }

  buildList(){
    let strikesArray = Object.keys(this.state.strikes).map((key)=>this.state.strikes[key]);
    let dataSource = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
    const list = dataSource.cloneWithRows(strikesArray);
    this.setState({list: list});
  }

  renderRow(strike){
    if (!strike.note) {
      strike = {day: 'Total', note: strike}
    }
    return(
      <View>
        <Text>{strike.day}</Text>
        <Text>{strike.note}</Text>
      </View>
    )
  }

  render() {
    if (!this.state.user || !this.state.list) {
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
        <ListView
          removeClippedSubviews={false}
          dataSource={this.state.list}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true}
          renderFooter={this.renderFooter.bind(this)}
          />
      </View>
    );
  }
}

export default Profile;
