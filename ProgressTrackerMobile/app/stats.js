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
    let graph = null;
    if (this.state.details === assessment.assessment_name) {
      graph = <BarGraph details={assessment.assessment_name}/>
    }
    return(
      <View style={{backgroundColor: 'lightgreen'}}>
        <Button
          color={'#C00A0A'}
          key={assessment.assessment_name}
          title={assessment.assessment_name + ' ' + assessment.score}
          onPress={this.showDetails(assessment.assessment_name)}
          />
        {graph}
      </View>
    )
  }

  showDetails(assessment){
    return () => {
      this.setState({details: assessment })
    }
  }

  renderFooter(){
    return null
  }

  render() {
    if (!this.state.assessments) {
      return null
    }
    return (
      <View>
        <Text
          style={{padding: 20}}
          >Your Assessments</Text>
          <ListView
            removeClippedSubviews={false}
            dataSource={this.buildList()}
            renderRow={this.renderRow.bind(this)}
            enableEmptySections={true}
            renderFooter={this.renderFooter.bind(this)}
            />
      </View>
    )
  }
}

export default Stats;
