import React, { Component } from 'react';
import { Text, View, Button, ListView } from 'react-native';
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
    fetch(`https://progresstrackerapi.herokuapp.com/api/assessment_scores`)
      .then((response) => response.json())
      .then((responseJson) => (this.buildList(responseJson)))
      .then(() => this.forceUpdate())
      .catch((error) => {
        console.error(error);
      });
  }

  buildList(assessments){
    let assessmentsArray = [];
    Object.keys(assessments).forEach((key)=>assessmentsArray.push(assessments[key]));
    const dataSource = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1.guid!=r2.guid});
    this.setState({dataSource: dataSource.cloneWithRows(assessmentsArray)});

  }

  renderRow(assessment){
    return(
      <Text>{assessment.assessment_name} Score: {assessment.score}</Text>
    )
  }

  render() {
    if (!this.state.dataSource) {
      return null
    }
    return (
      <View>
        <Text>Your Assessments</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}/>
      </View>
    )
  }
}

export default Stats;
