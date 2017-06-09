import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import * as config from '../config/config';
import OAuthManager from 'react-native-oauth';


class LogIn extends React.Component{
  static navigationOptions = {
    title: 'Progress Tracker Mobile'
  }



  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL);
  }

  componentWillUnmount(){
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = ( event ) => {
    let code = (event.url).split("=")[1];

    const config =  {
    github: {
      client_id: '3a58418b7ea099800860',
      client_secret: '7d920a24dd7376688407b496224368813d26ad00',
      code: code
      }
    }
    // Create the manager
    const manager = new OAuthManager('progresstrackermobile');
    // configure the manager
    manager.configure(config);
    // manager.authorize('github')
    // .then(response => console.log(response))
  }

  navigate = ( url ) => {
    const { navigate } = this.props.navigation;
    const route = url.replace(/.*?:\/\//g, '');

    if (route === 'home') {
      navigate('Profile')
    };
  }

  _onPress() {
    const { navigate } = this.props.navigation;
    // fetch('https://github.com/login/oauth/authorize?', config.githubAuthId)
    // .then(response => {
      Linking.openURL("https://github.com/login/oauth/authorize?client_id=3a58418b7ea099800860")
    // })
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
