import React, { Component } from 'react';
import { View, Text } from 'react-native';

class BarGraph extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: props.details
    }
  }
  componentWillMount(){
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
        <Text>{this.state.assessment_name}</Text>
        <Text>your socre: {this.state.score}</Text>
        <Text>average: {this.state.avg_score}</Text>
        <Text>max: {this.state.max_score}</Text>
        <Text>median: {this.state.median_score}</Text>
        <Text>passing: {this.state.passing_score}</Text>
      </View>
    )
  }
}

export default BarGraph;
