import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import * as config from '../config/config';


class LogIn extends React.Component{
  static navigationOptions = {
    title: 'Progress Tracker Mobile'
  }

  _onPress() {
    const { navigate } = this.props.navigation;

    fetch('http://github.com/login/oauth/authorize', {
      headers: config.githubAuthId
    })
    .then(response => console.log(response))
    .then(navigate("Navigate"))
  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View></View>
          <Image source={require("../assets/aa.jpg")}
                 style={{
                   width: 200,
                   height: 200,
                   alignSelf: 'center'
                 }}/>
         <SocialIcon
               type="github"
               button={true}
               style={{backgroundColor: '#ff3850',
                       marginBottom: 50,
                       justifyContent: 'center',
                       borderRadius: 0}}
               loading={false}
               onPress={this._onPress.bind(this)}
               title="Sign-In with Github"
               color="white" />
      </View>
    )

  }
}


export default LogIn;
