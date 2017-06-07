import React, { Component } from 'react';
import { View, Text } from 'react-native';

class BarGraph extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: props.details
    }
  }
  componentWillReceiveProps(){
    console.log(`https://progresstrackerapi.herokuapp.com/api/assessment_score/${this.props.details}`);
    fetch(`https://progresstrackerapi.herokuapp.com/api/assessment_score/${this.props.details}`)
    .then((response) => response.json())
    .then((stats) => this.setState(stats))
  }

  render(){
    if (!this.state.score) {
      return null
    }
    return (
      <View>
        <Text>{this.state.name}</Text>
        <Text>{this.state.score}</Text>
        <Text>{this.state.avg_score}</Text>
        <Text>{this.state.max_score}</Text>
        <Text>{this.state.median_score}</Text>
        <Text>{this.state.passing_score}</Text>
      </View>
    )
  }
}

export default BarGraph;
