import React, { Component } from 'react';
import { View, Text, Dimensions, ActivityIndicator } from 'react-native';
import AnimatedBar from './animated_bar.js';

class BarGraph extends React.Component {

  constructor(props){
    super(props);
    this.dim = Dimensions.get('window');
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
    const pageStyle = {
      justifyContent: 'space-between',
      height: 170,
      backgroundColor: 'white',
      paddingTop: 20,
      paddingBottom: 20
    }

    if (!this.state.score) {
      return(
      <View style={pageStyle}>
        <ActivityIndicator color={'#C00A0A'} size={'large'}/>
      </View>)
    }
    let max = this.state.max_score;
    let score = this.state.score/max;
    let avg_score = this.state.avg_score/max;
    let median_score = this.state.median_score/max;
    let passing_score = this.state.passing_score/max;

    const textStyle = {
      width: 100,
      backgroundColor: '#C00A0A',
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: 40,
      marginLeft: 10,
      marginRight: 10
    }
    const numberStyle = {
      color: 'white',
      left: 130,
      top: 20,
      backgroundColor: 'transparent',
      zIndex: 9000,
      position: 'absolute'
    }
    const barStyle = {
      left: 20,

    }
    const viewStyle = {
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }
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
      <View style={pageStyle}>
        <Text style={passingTextStyle}>Passing</Text>
        <View style={passingBarStyle}></View>
        <View style={viewStyle}>
          <Text style={textStyle}>Your Score</Text>
          <Text style={numberStyle}>{this.state.score}/{max}</Text>
          <AnimatedBar style={barStyle} value={score} />
        </View>
        <View style={viewStyle}>
          <Text style={textStyle}>Average</Text>
          <Text style={numberStyle}>{this.state.avg_score}/{max}</Text>
          <AnimatedBar value={avg_score} />
        </View>
        <View style={viewStyle}>
          <Text style={textStyle}>Median</Text>
          <Text style={numberStyle}>{this.state.median_score}/{max}</Text>
          <AnimatedBar value={median_score} />
        </View>
      </View>
    )
  }
}

export default BarGraph;
