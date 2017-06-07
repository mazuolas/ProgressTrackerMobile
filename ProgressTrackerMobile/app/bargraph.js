import React, { Component } from 'react';
import { View, Text } from 'react-native';

class BarGraph extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: props.details
    }
    fetch(`https://progresstrackerapi.herokuapp.com/api/assessment_score/${this.state.name}`)
      .then((response) => response.json())
      .then((stats) => this.setState(stats))
  }

  render(){
    if (!this.state.score) {
      return null
    }
    return (
      <View>
        <Text>{this.state.score}</Text>
      </View>
    )
  }
}

export default BarGraph;
