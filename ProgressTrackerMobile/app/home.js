import React, { Component } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import PageTitle from './page_title';
import Classmate from './classmate';

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
    this.token = this.props.navigation.state.params.session;
    this.state = { pair: {} };
  }

  componentDidMount() {
    this.fetchPair();
  }

  fetchPair() {
    fetch(`https://progresstrackerapi.herokuapp.com/api/pair/today?session_token=${this.token}`)
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
            <Text style={{fontSize: 30, marginBottom: 10}}>Today's Pairing</Text>
            <Text style={{fontSize: 20}}>{`Workstation: ${pair.workstation}`}</Text>
            <Classmate classmate={pair.partner} />
          </View>
        </View>
      );
    } else {
      return null;
    }
  }

}

export default Home;
