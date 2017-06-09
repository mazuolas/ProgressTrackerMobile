import React, { Component } from 'react';
import PageTitle from './page_title';
import { Text, View, ScrollView, Button, Linking } from 'react-native';
import { Icon, Card, SocialIcon } from 'react-native-elements';

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
    super(props)
    this.state = { classmates: [] };
    this.fetchClassmates = this.fetchClassmates.bind(this);
  }

  componentDidMount() {
    this.fetchClassmates();
  }

  fetchClassmates() {
    fetch('https://progresstrackerapi.herokuapp.com/api/classmates')
      .then((response) => response.json())
      .then(classmates => this.setState({ classmates: classmates}));
  }

  render() {
    const classmate = this.state.classmates.map((classmate, idx) => {
      return (
        <Card key={idx} image={{uri:classmate.picture_url}}
          containerStyle={{height: '50%', width: '60%', marginLeft: '20%'}}
          title={`${classmate.fname} ${classmate.lname}\n${classmate.pronouns}`} >
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <SocialIcon type='linkedin' onPress={() => Linking.openURL(classmate.linkedin_url)} />
            <SocialIcon type='github-alt' onPress={() => Linking.openURL(classmate.github_url)} />
            <Icon name='mail-outline' size={65} onPress={() => Linking.openURL(`mailto:${classmate.email}`)} />
          </View>
        </Card>)
    })

    if (this.state.classmates.length >= 1) {
      return (
        <View>
          <PageTitle title="Classmates" />
          <ScrollView contentContainerstyle={{flexGrow:1}}>
            {classmate}
          </ScrollView>
        </View>
      );
    } else {
      return null;
    }
  }
}

export default Classmates;
