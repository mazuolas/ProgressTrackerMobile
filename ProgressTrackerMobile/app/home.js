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
        color= { focused ? '#C00A0A' : 'white' }
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
        <View style={{flex:1, backgroundColor: 'white', justifyContent: 'center'}}>
          <PageTitle title={pair.day} />
          <View style={{flex: 1, margin: 20}}>
            <Text style={{fontSize: 30, marginBottom: 20, alignSelf: 'center'}}>{"Partner"}</Text>
            <View style={{flex: 1}}>
              <Classmate classmate={pair.partner}/>
            </View>
            <Text style={{padding: 10,
                         width: '100%',
                         color: 'white',
                         textAlign: 'center',
                         fontSize: 20,
                         fontWeight: 'bold',
                         alignSelf: 'center',
                         backgroundColor: '#C00A0A'}}>
                         {`Workstation: ${pair.workstation}`}
           </Text>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }

}

export default Home;
