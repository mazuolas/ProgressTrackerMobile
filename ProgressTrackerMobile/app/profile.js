import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Image, Linking, ListView } from 'react-native';
import { Button, Icon, SocialIcon } from 'react-native-elements';
import PageTitle from './page_title';
import * as style from './styles/profile.js';

class Profile extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
      <Icon
        color= { focused ? '#C00A0A' : 'white' }
        name='perm-identity'
      />
    ),
  };

  constructor(props){
    super(props);
    this.token = this.props.navigation.state.params.session;
    this.state = {
      user: null,
      strikes: null
    }
    fetch(`https://progresstrackerapi.herokuapp.com/api/user/me?session_token=${this.token}`)
      .then(response => (response.json()))
      .then(responseJson => (this.setState({user: responseJson})))
      .catch(error => (console.log(error)))

    fetch(`https://progresstrackerapi.herokuapp.com/api/strikes?session_token=${this.token}`)
      .then(response => (response.json()))
      .then(responseJson => (this.setState({strikes: responseJson})))
      .then(this.buildList.bind(this))
      .catch(error => (console.log(error)))
  }

  logout(){
    const { navigate } = this.props.navigation;
    fetch(`https://progresstrackapi.herokuapp.com/api/session/delete?session_token=${this.token}`, {
      method: "DELETE"
    })
    .then( () => navigate("Log"))
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
      <View style={style.strikeRow}>
        <Text style={style.day}>{strike.day}</Text>
        <Text style={style.note}>{strike.note}</Text>
      </View>
    )
  }

  render() {
    if (!this.state.user || !this.state.list) {
      return <PageTitle title="Profile" />
    }

    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <PageTitle title={`${this.state.user.fname} ${this.state.user.lname}`} />
        <View>
          <View style={style.topProfile}>
            <Image
              style={{width: 150, height: 150, borderRadius: 30}}
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
          style={style.strikeList}
          />
        <Button
          title={"Logout"}
          iconRight
          icon={{name: 'input'}}
          onPress={this.logout.bind(this)}
          backgroundColor={'rgba(192,10,10,0.9)'}
          color={'white'}
          fontSize={20}
          fontWeight={'bold'}
          buttonStyle={{marginBottom: 20}}
        />
      </View>
    );
  }
}

export default Profile;
