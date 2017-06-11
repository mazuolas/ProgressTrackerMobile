import React, { Component } from 'react';
import { Text, View, Button, ListView, TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements';
import  BarGraph  from './bargraph';
import PageTitle from './page_title';


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
      list: null
    };

    fetch(`https://progresstrackerapi.herokuapp.com/api/assessment_scores?session_token=${this.props.navigation.state.params.session}`)
      .then((response) => response.json())
      .then((responseJson) => {
        resopnseJson = responseJson || {};
        this.setState({assessments: responseJson})
        })
      .then(this.buildList.bind(this))
      .catch((error) => {
        console.error(error);
      });
  }

  buildList(){
    let assessmentsArray = Object.keys(this.state.assessments).map((key)=>this.state.assessments[key]).reverse();
    if (!this.state.details && assessmentsArray[0]) {
      this.setState({details: assessmentsArray[0].assessment_name});
    }
    let dataSource = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
    const list = dataSource.cloneWithRows(assessmentsArray);
    this.setState({list: list});
  }

  renderRow(assessment){
    let graph = null;
    let title = assessment.assessment_name + ' Your Score: ' + assessment.score
    if (this.state.details === assessment.assessment_name) {
      graph = <BarGraph details={assessment.assessment_name} session={this.props.navigation.state.params.session}/>
      title = `${assessment.assessment_name} Details`
    }
    return(
      <View style={{backgroundColor: 'lightgreen', margin: 2}}>
        <Button
          color={'#C00A0A'}
          key={assessment.assessment_name}
          title={title}
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

    return (
      <View>
        <PageTitle title='Assessments' />
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
