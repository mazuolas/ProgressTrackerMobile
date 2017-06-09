import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';
// import * as config from '../config/config';
import OAuthManager from 'react-native-oauth';
import { NavigationActions } from 'react-navigation';

const manager = new OAuthManager('progresstrackermobile');

// Create the manager


class LogIn extends React.Component{

  static navigationOptions = {
    title: 'Progress Tracker Mobile'
  }



  componentDidMount() {
    manager.configure({
      github: {
        client_id: '3a58418b7ea099800860',
        client_secret: '7d920a24dd7376688407b496224368813d26ad00'
      }
    });
    manager.authorize('github')
    manager.makeRequest('github', 'https://api.github.com/user', {
    headers: {
      "method": "get",
      "Accept": "application/json"
    }
  })
  .then(resp => console.log(resp.data))
  const { navigate } = this.props.navigation;
  console.log(this.props.navigation.state);
  const resetAction = NavigationActions.reset({
    index: 1,
    actions: [
      NavigationActions.navigate({ routeName: 'Navigate'})
    ]
  })
  navigate('Navigate', {}, this.props.navigation.dispatch(resetAction));
  }

  componentWillUnmount(){
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = ( event ) => {
    let code = (event.url).split("=")[1];
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
      // Linking.openURL("https://github.com/login/oauth/authorize?client_id=3a58418b7ea099800860")
    // })
    // const manager = new OAuthManager('progresstrackermobile');
    // manager.configure({
    //   github: {
    //     client_id: '3a58418b7ea099800860',
    //     client_secret: '7d920a24dd7376688407b496224368813d26ad00'
    //   }
    // });
    // manager.authorize('github', {scopes: 'user'})
    // .then(
    //   manager.makeRequest('github', 'https://api.github.com/user', {
    //   headers: {
    //     "method": "get",
    //     "Accept": "application/json"
    //   }
    // })
    // .then(resp => console.log(resp.data))
    // .then(manager.savedAccounts().then(response => console.log(response.accounts)))
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
