import React from 'react';
import { Text, View, Image } from 'react-native';
import { SocialIcon } from 'react-native-elements';

class App extends React.Component{
  render(){

    let socialIcon = (<SocialIcon
                type="github"
                button
                style={{backgroundColor: '#ff3850',
                        marginBottom: 50,
                        justifyContent: 'center',
                        borderRadius: 0}}
                loading={false}
                title="Sign-In with Github"
                color="white" />)
    return(
      <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View></View>
          <Image source={require("../assets/aa.jpg")}
                 style={{
                   width: 200,
                   height: 200,
                   alignSelf: 'center'
                 }}/>
            {socialIcon}
      </View>
    )

  }
}

export default App;
