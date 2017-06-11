import React, { Component } from 'react';
import { Text, View, Button, Platform, Linking } from 'react-native';
import { Icon, Card, SocialIcon } from 'react-native-elements';
import PageTitle from './page_title';

class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <Icon
        color= { focused ? 'royalblue' : 'white' }
        name='home'/>
    ),
  };

  constructor(props) {
    super(props);
    this.state = { pair: {} };
  }

  componentDidMount() {
    this.fetchPair();
  }

  fetchPair() {
    fetch(`https://progresstrackerapi.herokuapp.com/api/pair/today?session_token=${this.props.navigation.state.params.session}`)
      .then((response) => response.json())
      .then((pair) => this.setState({pair: pair}))
  }

  render() {
    const { pair } = this.state;
    if (pair.partner !== undefined) {
      return (
        <View style={{flex:1}}>
          <PageTitle title={pair.day} />
          <View style={{flex:1, flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center'}}>
            <Text>{`Workstation: ${pair.workstation}`}</Text>
            <Card image={{uri:pair.partner.picture_url} }
              title={`Today's Pair\n${pair.partner.fname} ${pair.partner.lname}\n${pair.partner.pronouns}`} >
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <SocialIcon type='linkedin' onPress={() => Linking.openURL(pair.partner.linkedin_url)} />
                <SocialIcon type='github-alt' onPress={() => Linking.openURL(pair.partner.github_url)} />
                <Icon name='mail-outline' size={65} onPress={() => Linking.openURL(`mailto:${pair.partner.email}`)} />
              </View>
            </Card>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }

}

export default Home;
