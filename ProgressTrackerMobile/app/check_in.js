import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Icon, Divider } from 'react-native-elements';
import { styleCheckedIn, styleToCheckIn,
        timeBlock, availability,
        timeHeader, timeBody } from './styles/check_in';
import { styleTitle } from './styles/page_title';
import PageTitle from './page_title';

// App Academy location:
// north corner
// 37.791603
// -122.393693
// east corner
// 37.791361
// -122.393403
// south corner
// 37.791035
// -122.393752
// west corner
// 37.791285
// -122.394041

// max lat: 37.791603
// min lat: 37.791035
// max long: -122.393403
// min long: -122.394041

const MAX_LAT = 37.791603;
const MIN_LAT = 37.791035;
const MAX_LONG = -122.393403;
const MIN_LONG = -122.394041;

class CheckIn extends React.Component {

  constructor(props) {
    super(props);
    this.token = this.props.navigation.state.params.session;
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      dayRange: null,
      checkIns: {}
    };
    this.fetchPosition = this.fetchPosition.bind(this);
  }

  componentDidMount() {
    this.fetchCheckins();
  }

  static navigationOptions = {
    tabBarLabel: 'Check In',
    tabBarIcon: ({ focused }) => (
      <Icon
        color= { focused ? '#C00A0A' : 'white' }
        name='check-circle'
        size={40}
      />
    ),
  };


  // fetch geolocation coordinates
  fetchPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        }, this.getDayRange);
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  fetchCheckins() {
    fetch(`https://progresstrackerapi.herokuapp.com/api/checkins/today?session_token=${this.token}`)
      .then((response) => response.json())
      .then((checkins) => this.setState({ checkIns: checkins }))
      .then(this.fetchPosition);
  }

  getDayRange() {
    const time = new Date(Date.now());
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const day = time.getDay();
    let dayRange;

    // skip weekends
    if (day === 0 || day === 6) {
      dayRange = null;
    // 8:00 - 9:00am
    } else if (hour === 8 || (hour === 9 && minutes === 0)) {
      dayRange = 'morning';
    // 1:15 - 1:30pm
    } else if (hour === 13 && (minutes >= 15 && minutes <= 30)) {
      dayRange = 'lunch';
    // 4:00 - 4:15pm
    } else if (hour === 16 && minutes <= 15) {
      dayRange = 'afternoon';
    } else {
      dayRange = null;
    }

    this.setState({dayRange},this.checkInUser);
  }

  validLocation() {
    // console.log(this.state.latitude);
    // console.log(this.state.longitude);
    return (
      this.state.latitude >= MIN_LAT &&
      this.state.latitude <= MAX_LAT &&
      this.state.longitude >= MIN_LONG &&
      this.state.longitude <= MAX_LONG
    )
  }

  // 1) GPS matches coordinates
  // 2) Valid time range
  // 3) Not already checked in
  checkInUser() {
    const dayRange =  this.state.dayRange;
    const requestData = { checkin: {[dayRange]: new Date(Date.now())} };
    if (this.validLocation() && this.state.dayRange !== null
      && !this.state.checkIns[dayRange]) {
      fetch(`https://progresstrackerapi.herokuapp.com/api/checkins/today?session_token=${this.token}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      }).then(this.fetchCheckins)
    } else {
      return null;
    }
  }

  showTime(time, range, start) {
    if (time) {
      t = new Date(time);
      return (
          <View style={styleCheckedIn}>
            <View style={timeBlock}>
              <Text style={timeHeader}>{`${range} `}</Text>
            </View>
            <View style={availability}>
              <Text style={timeBody}>
                {`Checked-In: ${t.toLocaleTimeString(navigator.language,
                  {hour: '2-digit', minute:'2-digit'})}`}
                </Text>
            </View>
          </View>
      );
    } else {
      return (
        <View style={styleToCheckIn}>
          <View style={timeBlock}>
            <Text style={timeHeader}>{`${range} `}</Text>
          </View>
          <View style={availability}>
            <Text style={timeBody}>
              {`Available ${start}`}
            </Text>
          </View>
        </View>
      );
    }
  }

  checkInButton(time){
    if (this.validLocation() && this.state.dayRange === time
      && this.state.checkIns[time] === null) {
      return (
        <View style={{backgroundColor: '#ffcccc', margin: 2}}>
          <Button
            color={'#C00A0A'}
            key={time}
            title={"Check In"}
            onPress={this.checkInUser.bind(this)}
            />
        </View>
      )

    } else {
      return null;
    }
  }

  render() {
    const { morning, lunch, afternoon } = this.state.checkIns;
    const title = "Today's Check-Ins";

    if (this.state.checkIns !== {}) {
      return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <PageTitle title={title} />
            <View style={{flex: 1}}>
              {this.showTime(morning, 'Morning', '8:00 - 9:00am')}
              {this.checkInButton('morning')}
            </View>
            <View style={{flex: 1}}>
              {this.showTime(lunch, 'Lunch', '1:15 - 1:30pm')}
              {this.checkInButton('lunch')}
            </View>
            <View style={{flex: 1}}>
              {this.showTime(afternoon, 'Afternoon', '4:00 - 4:15pm')}
              {this.checkInButton('afternoon')}
            </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

export default CheckIn;
