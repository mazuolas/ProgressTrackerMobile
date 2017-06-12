import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import { Icon, Card, SocialIcon } from 'react-native-elements';

class Classmate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classmate = this.props.classmate;
    return (
      <Card image={{uri:classmate.picture_url} }
        title={`${classmate.fname} ${classmate.lname}\n${classmate.pronouns}`} >
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <SocialIcon type='linkedin' onPress={() => Linking.openURL(classmate.linkedin_url)} />
          <SocialIcon type='github-alt' onPress={() => Linking.openURL(classmate.github_url)} />
          <Icon name='mail-outline' size={65} onPress={() => Linking.openURL(`mailto:${classmate.email}`)} />
        </View>
      </Card>
    );
  }
}

export default Classmate;
