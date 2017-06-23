# Progress Tracker Mobile
[LIVE](https://mazuolas.github.io/ProgressTrackerMobile/index.html)
___

Progress Tracker Mobile is the mobile extraction of [App Academy](appacademy.io)'s Progress Tracker.  Progress Tracker Mobile brings ease-of-use, functionality and intuitive navigation into the hands of students at App Academy.

![walkthrough](docs/general.gif)

## Tech
* React Native
  - `react-native-oauth`
  - `react-native-elements`
  - `react-navigation`
* Ruby on Rails
* Github OAuth 2.0

## Setup

Progress Tracker Mobile is currently being reviewed for release on the Google Play Store as well as the Apple App Store.  Once approved, PTM will be available for download via the mentioned.

For full functionality, it will require location access in order to allow the automated check-in function to act as needed.

Progress Tracker Mobile ***requires*** valid App Academy enrollment.


## Features
- **Github OAuth 2.0**
 - Utilizes `react-native-oauth` with a `rails` API for authentication.


- **Easy and automatic check-ins**
 - Simple check-in to make staying on track intuitive and effortless.


 - **Assessment Statistics**
  - Visual representation of current and past assessment scores with added metrics for clarity.


- **Daily pair assignments**
  - Displays current day, pair assignment, and workstation on authentication for quick access.


- **Classmates Directory**
 - Learn about your classmates and watch them grow professionally with direct access to github repo and LinkedIn.

## Implementation
#### *Authentication*
PTM utilizes `react-native-oauth` to manage tokens between the GitHub API as well as the Progress Tracker Mobile API.  Opening the application initiates an automatic reconfiguring of the authorization tokens (or initial configuration) to ensure a constantly changing set of auth keys.

```ruby
componentDidMount() {
  if ( Boolean(manager.savedAccounts().accounts) ) {
    manager.deauthorize('github')
    .then( () => manager.configure( config.auth ) );
  } else {
    manager.configure( config.auth );
  }
}
```
You can also log out on the profile page to force a token reset.

#### *Assessments*
Assessment scores and cohort statistics are displayed using a bar graph that allows users to see a visual representation of their own performance and how they compare to their peers.

Dynamic bars were implemented by creating animated view components which grow to a percentage of total screen width based on score divided by total possible score. The position of the passing line was calculated with similar calculations.  

Each row of the assessments page is rendered as a button which when activated fetches and displays more details about the specific assessment.

#### *Check-In*
Automatically submits check-in POST request after confirmation of location and time.

##### *Location*
Fetches geolocation coordinates from student's device

```JavaScript
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

// App Academy location: 37.791258, -122.393777
validLocation() {
  return (this.state.latitude === 37.791258 &&
    this.state.longitude === -122.393777)
}
```

##### *Time*
Validates check-in window is open (morning, lunch, afternoon)

```JavaScript
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
```

## Roadmap
- [x] GitHub OAuth
- [x] Geolocation based check-in
- [ ] Job Seeker Variation
- [ ] iOS release on App Store
- [ ] Android release on Play Store
- [ ] Daily reports and quizzes
- [ ] Todo list for students
- [ ] Contact submission
