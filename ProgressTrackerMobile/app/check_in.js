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
      checkIns: {}
    };

    this.checkIn = this.checkIn.bind(this);
    this.renderCheckInButton = this.renderCheckInButton.bind(this);
  }

  componentWillMount() {
    this.fetchCheckins();
    this.fetchPosition();
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


  // fetch geolocation coordinates
  fetchPosition() {
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

  fetchCheckins() {
    return fetch('http://progresstrackerapi.herokuapp.com/api/checkins/today')
      .then((response) => response.json())
      .then((checkins) => {
        this.setState({ checkIns: checkins })
        })
      .catch((error) => {
        console.error(error);
      });
  }

  checkIn() {
    this.setState({ checkedIn: true });
  }


  // App Academy location: 37.791258, -122.393777
  validLocation() {
    (this.state.latitude === 37.791258 &&
      this.state.longitude === -122.393777)
  }

  // 1) GPS matches coordinates
  // 2) Valid time range
  renderCheckInButton() {
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

  showTime(time) {
    if (time) {
      t = new Date(time);
      return t = t.toLocaleTimeString(navigator.language,
        {hour: '2-digit', minute:'2-digit'});
    } else {
      return "Not checked in."
    }
  }

  render() {
    const { morning, lunch, afternoon } = this.state.checkIns;
    if (this.state.checkIns !== {}) {
      return (
        <View style={{ flex: 1, flexDirection: 'column',
                        justifyContent: 'center',
        }}>
          {this.renderCheckInButton()}
          <Text>
            Morning: {this.showTime(morning)}
          </Text>
          <Text>
            Lunch: {lunch ? lunch : "Not checked in"}
          </Text>
          <Text>
            Afternoon: {afternoon ? afternoon : "Not checked in"}
          </Text>
          <Text>Latitude: {this.state.latitude}</Text>
          <Text>Longitude: {this.state.longitude}</Text>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </View>
      );
    } else {
      return null;
    }
  }
}

export default CheckIn;
