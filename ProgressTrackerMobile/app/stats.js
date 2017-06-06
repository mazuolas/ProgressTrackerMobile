import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

class Stats extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Stats',
    tabBarIcon: ({ focused }) => (
      <Icon
        color= { focused ? 'royalblue' : 'white' }
        name='insert-chart'/>
    ),
  };

  constructor(props){
    super(props);
    this.state = {name: null};
    fetch(`https://progresstrackerapi.herokuapp.com/api/day/today`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({assessments: responseJson})
      })
      .catch((error) => {
        console.error(error);
      });
      // .then((res) => this.setState({assessments: res.json()}))
  }

  render() {
    const assessments = this.state.assessments;
    if (!assessments) {
      return (
        <Text>Stats Page</Text>
      );
    }
    return (
      <View>
        <Text>{assessments.name}</Text>
      </View>
    )
  }
}

export default Stats;
