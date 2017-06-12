import React from 'react';
import { Text,
         View,
         Image,
         Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import * as config from '../config/config';
import { NavigationActions } from 'react-navigation';

const manager = config.manager

class LogIn extends React.Component{

  static navigationOptions = {
    title: 'Progress Tracker Mobile'
  }

  constructor(props){
    super(props);
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    if (Boolean(manager.savedAccounts().accounts)) {
      manager.deauthorize('github')
      .then( () => manager.configure(config.auth));
    } else {
      manager.deauthorize('github')
      manager.configure(config.auth);
    }
  }


  onPress() {
    this.setState({loading: true})
    const { navigate } = this.props.navigation;
    manager.authorize('github')
    .then(() => manager.makeRequest('github', 'https://api.github.com/user'))
    .then( (response) => {
      fetch(`https://progresstrackerapi.herokuapp.com/api/session?username=${response.data.login}`, {
        method: "POST",
      })
      .then( res => res.json())
      .then( (resp) => {
        this.setState({loading:false})
        if (Boolean(resp.session_token) ) {
          navigate("Navigate", {session: resp.session_token})
        }
      })
    })
  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex: 1, justifyContent: 'space-between', backgroundColor: 'white' }}>
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
              loading={this.state.loading}
              onPress={this.onPress.bind(this)}
              title="Sign-In with Github"
              color="white"
              disabled={this.state.loading}
                />
            </View>
    )

  }
}


export default LogIn;
