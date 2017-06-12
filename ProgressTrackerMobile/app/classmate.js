import React, { Component } from 'react';
import { View, Linking, Text } from 'react-native';
import { Icon, Card, SocialIcon } from 'react-native-elements';

class Classmate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classmate = this.props.classmate;
    return (
      <Card
        image={{uri:classmate.picture_url}}
        containerStyle={{backgroundColor: 'white', borderColor: 'white', margin: 5, shadowColor: 'white', borderBottomColor: 'gray'}}
        wrapperStyle={{backgroundColor: 'white', flexDirection: 'column'}}
        imageStyle={{resizeMode: 'contain', backgroundColor: 'white'}}
        imageWrapperStyle={{backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{justifyContent: 'center', alignItems: 'center', flex: 1, fontSize: 18, fontWeight: 'bold'}}>
            {`${classmate.fname} ${classmate.lname}\n`}
            <Text style={{fontSize: 12, fontWeight: 'normal'}}>
              {classmate.pronouns}
            </Text>
          </Text>
          <SocialIcon type='linkedin' onPress={() => Linking.openURL(classmate.linkedin_url)} />
          <SocialIcon type='github-alt' onPress={() => Linking.openURL(classmate.github_url)} />
          <Icon reverse={true} raised={true} name='mail-outline' onPress={() => Linking.openURL(`mailto:${classmate.email}`)} />
        </View>
      </Card>
    );
  }
}

export default Classmate;
