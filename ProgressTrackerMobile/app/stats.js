import React, { Component } from 'react';
import { Text, View, Button, ListView, TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements';
import  BarGraph  from './bargraph';

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
    this.state = {
      details: null,
      dataSource: null,
      assessments: {}
    };

    fetch(`https://progresstrackerapi.herokuapp.com/api/assessment_scores`)
      .then((response) => response.json())
      .then((responseJson) => (this.setState({assessments: responseJson})))
      .catch((error) => {
        console.error(error);
      });
  }

  buildList(){
    let assessmentsArray = Object.keys(this.state.assessments).map((key)=>this.state.assessments[key]);
    let dataSource = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
    return dataSource.cloneWithRows(assessmentsArray);
  }

  renderRow(assessment){
    return(
      <Button
        key={assessment.assessment_name}
        style={{backgroundColor: 'lightgreen', fontSize: 30}}
        title={assessment.assessment_name}
        onPress={this.showDetails(assessment.assessment_name)}
        />
    )
  }

  showDetails(assessment){
    return () => {
      this.setState({details: assessment })
      this.render();
    }
  }

  render() {
    if (!this.state.assessments) {
      return null
    }
    console.log(this.state.details);
    return (
      <View>
        <Text
          style={{padding: 20}}
          >Your Assessments</Text>
          <BarGraph details={this.state.details}/>
          <ListView
            dataSource={this.buildList()}
            renderRow={this.renderRow.bind(this)}
            pageSize={6}
            initialListSize={6}
            />
      </View>
    )
  }
}

export default Stats;
