import React, { Component } from 'react';
import PageTitle from './page_title';
import Classmate from './classmate';
import { Text, View, ScrollView, Button } from 'react-native';
import { Icon } from 'react-native-elements';

class Classmates extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Classmates',
    tabBarIcon: ({ focused }) => (
      <Icon
        color= { focused ? 'royalblue' : 'white' }
        name='people'
      />
    ),
  };

  constructor(props) {
    super(props);
    this.token = this.props.navigation.state.params.session;
    this.state = { classmates: [] };
    this.fetchClassmates = this.fetchClassmates.bind(this);
  }

  componentDidMount() {
    this.fetchClassmates();
  }

  fetchClassmates() {
    fetch(`https://progresstrackerapi.herokuapp.com/api/classmates?session_token=${this.token}`)
      .then((response) => response.json())
      .then(classmates => this.setState({ classmates: classmates}));
  }


  renderClassMates(classmates) {
    return classmates.map((classmate, idx) => {
      return (
        <Classmate key={idx} classmate={classmate} />)
    })
  }


  render() {
    if (this.state.classmates.length >= 1) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <PageTitle title="Classmates" />
          <ScrollView contentContainerStyle={{paddingBottom: 100}}>
            {this.renderClassMates(this.state.classmates)}
          </ScrollView>
        </View>
      );
    } else {
      return null;
    }
  }
}

export default Classmates;
