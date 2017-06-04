## Progress Tracker Mobile

### Background

Unofficial mobile version of the App Academy Progress Tracker for students.  Progress Tracker is a web tool used by students and instructors for guidance and accountability during the App Academy curriculum.  The mobile progress tracker allows easier and more intuitive access to the daily functionalities needed by the students.


### Functionality

- [ ] OAuth 2.0
- [ ] React Native Application
- [ ] D3 Data Visualization for student stats
- [ ] Location based check-in service
- [ ] Workstation and Peer assignments
- [ ] Ruby on Rails Backend
- [ ] Heroku hosted server

### Wireframe

Simple and intuitive navigation across the bottom.  With OAuth splash page.

![wireframe](/docs/wireframe_ptaa.png)

### Technologies and Technical Challenges

* Built using React Native with Rails API
* OAuth user authentication with Github
* Heroku hosting
* D3 for stats visualization

The main technical challenges will be learning several new technologies -- OAuth, React Native, D3.

OAuth may be particularly difficult, but we can implement the react-native-oauth package and have set aside significant type to develop this feature.

Additionally, we have to determine how a user will navigate between pages. Since mobile apps do not have a URL, routing will need to be handled differently. React Navigation should provide a good technical solution for this challenge.

### Weekend Accomplishments

* Matt studied how to implement Ouath 2.0 with React Native
* Mark set-up the Rails backend with the appropriate schema
* Chris researched React Navigation and how to structure the application’s files

### Group Members & Work Breakdown

Our group consists of three members, Chris Gillespie, Matthew Moon, and Mark Azuolas.

Chris' primary responsibilities will be:

 * Researching and implementing geolocation
 * Creating nav bar and header components
 * Creating a check in tab

Matt's primary responsibilities will be:

 * Researching and implementing oAuth for Github logins
 * Creating the login page
 * Creating the home page with pairing assignment

Mark's primary responsibilities will be:

 * Implementing the rails back end
 * Creating the user stats page using D3
 * Creating the user profile page with strikes

### Implementation Timeline
**Day One:** Begin working on oAuth, back end routes, and navigation within the app. By the end of the day we will have:
* Completed Ruby on Rails server with restful API endpoints (Mark)
* Initial setup of oAuth (Matt)
* React Native file structure skeleton (Chris)

**Day Two:** Continue working on oAuth and navigation. Start generating user stats. By the end of the day we will have:
* Completed nav bar components (Chris)
* Back end authentication (Matt)
* Data processed with D3 to generate stats

**Day Three:** Finish user authentication. Start working on a stats page and geolocation based check in requests. By the end of the day we will have:
* Completed oAuth logins (Matt)
* The ability to send geolocation data to in requests to the server (Chris)
* Displayed assessment stats (Mark)

**Day Four:** Start working on the home and check in page. Finish work on the user stats page.  By the end of the day we will have:
* Completed user stats page (Mark)
* Home page component (Matt)
* Check in page component (Chris)

**Day Five:** Finish all of the app's pages. By the end of the day we will have:
* Completed home page (Matt)
* Completed user profile (Mark)
* Completed check in page (Chris)
