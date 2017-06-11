import React, { Component } from 'react';
import { View, Text, Dimensions, ActivityIndicator } from 'react-native';
import AnimatedBar from './animated_bar.js';
import * as style from './styles/bargraph.js';

class BarGraph extends React.Component {

  constructor(props){
    super(props);
    this.dim = Dimensions.get('window');
    this.state = {
      name: props.details
    }
  }
  componentWillMount(){
    fetch(`https://progresstrackerapi.herokuapp.com/api/assessment_score/${this.props.details}?session_token=${this.props.session}`)
    .then((response) => response.json())
    .then((stats) => this.setState(stats))
  }

  render(){

    if (!this.state.score) {
      return(
      <View style={style.pageStyle}>
        <ActivityIndicator color={'#C00A0A'} size={'large'}/>
      </View>)
    }
    let max = this.state.max_score;
    let score = this.state.score/max;
    let avg_score = this.state.avg_score/max;
    let median_score = this.state.median_score/max;
    let passing_score = this.state.passing_score/max;

    const passingBarStyle = {
      position: 'absolute',
      height: 140,
      width: 2,
      backgroundColor: '#C00A0A',
      top: 15,
      left: 120 + Math.floor(this.dim.width * .6 * passing_score),
      zIndex: 9000
    }

    const passingTextStyle = {
      fontSize: 10,
      color: "#C00A0A",
      position: 'absolute',
      top: 8,
      left: 80 + Math.floor(this.dim.width * .6 * passing_score),
    }

    return (
      <View style={style.pageStyle}>
        <Text style={passingTextStyle}>Passing</Text>
        <View style={passingBarStyle}></View>
        <View style={style.viewStyle}>
          <Text style={style.textStyle}>Your Score</Text>
          <Text style={style.numberStyle}>{this.state.score}/{max}</Text>
          <AnimatedBar style={style.barStyle} value={score} />
        </View>
        <View style={style.viewStyle}>
          <Text style={style.textStyle}>Average</Text>
          <Text style={style.numberStyle}>{this.state.avg_score}/{max}</Text>
          <AnimatedBar value={avg_score} />
        </View>
        <View style={style.viewStyle}>
          <Text style={style.textStyle}>Median</Text>
          <Text style={style.numberStyle}>{this.state.median_score}/{max}</Text>
          <AnimatedBar value={median_score} />
        </View>
      </View>
    )
  }
}

export default BarGraph;
