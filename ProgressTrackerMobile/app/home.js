import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements';
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
    fetch('https://progresstrackerapi.herokuapp.com/api/pair/today')
      .then((response) => response.json())
      .then((pair) => this.setState({pair: pair}))
  }

  render() {
    const { pair } = this.state;

    if (pair.partner !== undefined) {
      debugger;
      return (
        <View>
          <PageTitle title={pair.day} />
          <View style={{flexDirection: 'column', flex: 1, alignItems: 'center',
            justifyContent: 'center'}}>
            <Text>
              {`Workstation: ${pair.workstation}`}
            </Text>
            <Text>
              {`Partner: ${pair.partner.fname} ${pair.partner.lname}`}
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
