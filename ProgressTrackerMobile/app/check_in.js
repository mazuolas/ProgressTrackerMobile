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
      dayRange: null,
      checkIns: {}
    };

  }

  componentDidMount() {
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
      }, this.getDayRange);
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

  getDayRange() {
    const time = new Date(Date.now());
    const hour = time.getHours();
    const minutes = time.getMinutes();
    let dayRange;
    // 8:00 - 9:00am
    if (hour === 8 || (hour === 9)) {
      dayRange = 'morning';
    // 1:15 - 1:30pm
    } else if (hour === 13 && (minutes >= 15 && minutes <= 30)) {
      dayRange = 'lunch';
    // 4:00 - 4:15pm
    } else if (hour === 16 && minutes <= 15) {
      dayRange = 'afternoon';
    } else {
      dayRange = 'n/a';
    }
    this.setState({dayRange},this.checkInUser);
  }

  // App Academy location: 37.791258, -122.393777
  validLocation() {
    return (this.state.latitude === 37.791258 &&
      this.state.longitude === -122.393777)
  }

  // 1) GPS matches coordinates
  // 2) Valid time range
  checkInUser() {
    const dayRange =  this.state.dayRange;
    debugger;
    if (this.validLocation && this.state.dayRange !== null) {
      fetch('http://progresstrackerapi.herokuapp.com/api/checkins/today', {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dayRange: new Date(Date.now()) })
      })
    } else {
      return null;
    }
  }

  showTime(time, range, start) {
    if (time) {
      t = new Date(time);
      return (
          <View style={{flexDirection: 'row'}}>
          <Text>{`${range}: `}</Text>
          <Text>{t.toLocaleTimeString(navigator.language,
                {hour: '2-digit', minute:'2-digit'})}</Text>
          <Icon color='green' name='check-circle' />
          </View>
      );
    } else {
      return <Text>{`${range}: Available from ${start}`}</Text>;
    }
  }

  render() {
    const { morning, lunch, afternoon } = this.state.checkIns;

    if (this.state.checkIns !== {}) {
      return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch',
                        justifyContent: 'center' }}>
          <View style={{backgroundColor: 'lightgreen', height: 100}}>
            {this.showTime(morning, 'Morning', '8:00-9:00am')}
          </View>
          <View style={{backgroundColor: 'lightblue', height: 100}}>
            {this.showTime(lunch, 'Lunch', '1:15-1:30pm')}
          </View>
          <View style={{backgroundColor: 'lightgray', height: 100}}>
            {this.showTime(afternoon, 'Afternoon', '4:00-4:15pm')}
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

export default CheckIn;
