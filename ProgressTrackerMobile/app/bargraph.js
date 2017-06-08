import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AnimatedBar from './animated_bar.js';

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
    let max = this.state.max_score;
    let score = this.state.score/max;
    let avg_score = this.state.avg_score/max;
    let median_score = this.state.median_score/max;
    return (
      <View>
        <Text>{this.state.assessment_name}</Text>
        <Text>your socre: {this.state.scor}</Text>
        <AnimatedBar value={score} />
        <Text>average: {this.state.avg_score}</Text>
        <AnimatedBar value={avg_score} />
        <Text>median: {this.state.median_score}</Text>
        <AnimatedBar value={median_score} />
        <Text>passing: {this.state.passing_score}</Text>
      </View>
    )
  }
}

export default BarGraph;
