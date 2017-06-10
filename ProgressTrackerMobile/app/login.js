import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import * as config from '../config/config';
import { NavigationActions } from 'react-navigation';

const manager = config.manager

class LogIn extends React.Component{

  static navigationOptions = {
    title: 'Progress Tracker Mobile'
  }

  componentDidMount() {
    manager.deauthorize('github')
    .then( () => manager.configure(config.auth));
  }

  componentWillUnmount(){
    console.log("close");
  }

  _onPress() {
    const { navigate } = this.props.navigation;
    manager.authorize('github')
    .then(() => manager.makeRequest('github', 'https://api.github.com/user'))
    .then( resp => console.log(resp))
    .then(() => navigate('Navigate'))
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
