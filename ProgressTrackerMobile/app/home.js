import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
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

  constructor(props) {
    super(props);
    this.state = {
      pair: {},
      pairs: []
    };
    this.fetchPairs = this.fetchPairs.bind(this);
  }

  componentDidMount() {
    this.fetchPairData();
  }

  fetchPairData() {
    fetch('https://progresstrackerapi.herokuapp.com/api/pair/today')
      .then((response) => response.json())
      .then((pair) => this.setState({pair: pair}))
      .then(this.fetchPairs);
  }

  fetchPairs() {
    fetch('https://progresstrackerapi.herokuapp.com/api/pairs')
      .then((response) => response.json())
      .then((pairs) => this.setState({pairs: pairs}));
  }

  render() {
    const { pair, pairs } = this.state;

    if (Object.keys(pairs).length >= 1) {
      return (
        <View style={{flexDirection: 'column', flex: 1, alignItems: 'center',
          justifyContent: 'center'}}>
          <Text>
            {`Day: ${pair.day}`}
          </Text>
          <Text>
            {`Workstation: ${pair.workstation}`}
          </Text>
          <Text>
            {`Partner: ${pair.partner.fname} ${pair.partner.lname}`}
          </Text>
        </View>
      );
    } else {
      return null;
    }
  }

}

export default Home;
