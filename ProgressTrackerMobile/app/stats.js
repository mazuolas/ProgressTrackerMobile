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
      assessments: {},
      mostRecent: null,
      list: null
    };

    fetch(`https://progresstrackerapi.herokuapp.com/api/assessment_scores`)
      .then((response) => response.json())
      .then((responseJson) => (this.setState({assessments: responseJson})))
      .then(this.buildList.bind(this))
      .catch((error) => {
        console.error(error);
      });
  }

  buildList(){
    let assessmentsArray = Object.keys(this.state.assessments).map((key)=>this.state.assessments[key]);
    // if (!this.state.details) {
      this.setState({mostRecent: assessmentsArray.pop()});
    // } else {
    //   this.setState({mostRecent: null})
    // }
    let dataSource = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
    const list = dataSource.cloneWithRows(assessmentsArray.reverse())
    this.setState({list: list});
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
          title={assessment.assessment_name + ' Your Score: ' + assessment.score}
          onPress={this.showDetails(assessment.assessment_name)}
          />
        {graph}
      </View>
    )
  }

  showDetails(assessment){
    return () => {
      this.buildList()
      this.setState({details: assessment })
    }
  }

  renderFooter(){
    return null
  }

  render() {
    if (!this.state.assessments || !this.state.list) {
      return null
    }
    let header = <Text
    style={{
      padding: 30,
      backgroundColor: '#C00A0A',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold'
    }}
    >Assessments</Text>
    if(this.state.mostRecent){
      header = (
        <View>
          <Text
          style={{
            padding: 20,
            backgroundColor: '#C00A0A',
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center'
          }}
          >Last Assessment: {this.state.mostRecent.assessment_name}</Text>
          <BarGraph details={this.state.mostRecent.assessment_name}/>
        </View>
      )
    }

    return (
      <View>
        {header}
        <ListView
          removeClippedSubviews={false}
          dataSource={this.state.list}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true}
          renderFooter={this.renderFooter.bind(this)}
          />
      </View>
    )
  }
}

export default Stats;
