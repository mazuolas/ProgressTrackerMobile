import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon, Button } from 'react-native-elements';

class CheckIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      checkedIn: null
    };

    this.checkIn = this.checkIn.bind(this);
    this.renderCheckIn = this.renderCheckIn.bind(this);
  }

  // fetch geolocation coordinates
  componentDidMount() {
    navigator.geolocation.getCurrentPosition( (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
        });
      }, (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  static navigationOptions = {
    tabBarLabel: 'Check In',
    tabBarIcon: ({ focused }) => (
      <Icon
        color= { focused ? 'royalblue' : 'white' }
        name='check-circle'
      />
    ),
  };

  // display green checked in button
  checkInStatus() {
    <Text>{this.state.checkedIn ? "Checked In!" : ""}</Text>
  }

  checkIn() {
    this.setState({ checkedIn: true });
  }


  // App Academy location: 37.791258, -122.393777
  validLocation() {
    (this.state.latitude === 37.791258 &&
      this.state.longitude === -122.393777)
  }

  // render check in button when:
  // 1) GPS matches App Academy coordinates
  // 2) Time is valid
  renderCheckIn() {
    if (this.validLocation) {
        return (
          <Button
            title="CHECK IN"
            icon={{name: 'check-circle'}}
            backgroundColor="#C00A0A"
            onPress={this.checkIn}
          />
        );
    } else {
      this.checkInStatus();
    }
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.renderCheckIn()}
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

export default CheckIn;
