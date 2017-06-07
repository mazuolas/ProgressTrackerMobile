import React, { Component } from 'react';
import { Text, View, Button, ListView, TouchableHighlight} from 'react-native';
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
    this.state = {
      details: null,
      dataSource: null};
  }
  componentDidMount(){
    //fetch list of assessents
    return fetch(`https://progresstrackerapi.herokuapp.com/api/assessment_scores`)
    .then((response) => response.json())
    .then((responseJson) => (this.buildList(responseJson)))
    .catch((error) => {
      console.error(error);
    });

  }

  buildList(assessments){
    let assessmentsArray = Object.keys(assessments).map((key)=>assessments[key]);
    let dataSource = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
    this.setState({dataSource: dataSource.cloneWithRows(assessmentsArray)});
  }

  renderRow(assessment){
    return(
      <Button
        style={{backgroundColor: 'lightgreen', fontSize: 30}}
        title={assessment.assessment_name}
        onPress={this.showDetails(assessment.assessment_name)}
        />
    )
  }

  showDetails(assessment){
    return () => (this.setState({details: <Text>{assessment}</Text> }))
  }

  render() {
    if (!this.state.dataSource) {
      return null
    }
    return (
      <View>
        <Text>Your Assessments</Text>
        {this.state.details}
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            pageSize={6}
            initialListSize={6}
            />
      </View>
    )
  }
}

export default Stats;
