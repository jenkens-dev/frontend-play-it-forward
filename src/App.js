import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import OrganizationContainer from './components/OrganizationContainer';
import Login from './components/Login';
import UserContainer from './components/UserContainer';
import EventContainer from './components/EventContainer';
import SignUp from './components/SignUp';
import NewEvent from './components/NewEvent';
import Event from './components/Event';
import OrganizationCard from './components/OrganizationCard';
import EventDetail from './components/EventDetail';
import EditVolunteer from './components/EditVolunteer';
import './App.css';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         isLoggedIn: false,
         currentUser: '',
      };
   }

   login = user => {
      console.log('Logging In', user);
      this.setState({
         isLoggedIn: true,
         currentUser: user,
      });
   };

   logout = () => {
      console.log('logging out');
      this.setState({
         isLoggedIn: false,
         currentUser: '',
      });
   };

   render() {
      return (
         <Router>
            <div>
               <NavBar
                  isLoggedIn={this.state.isLoggedIn}
                  currentUser={this.state.currentUser}
               />
               <Route exact path="/" component={Home} />
               <Route exact path="/about" component={About} />
               <Route
                  exact
                  path="/login"
                  render={() => (
                     <Login
                        onLogin={this.login}
                        currentUser={this.state.currentUser}
                        isLoggedIn={this.state.isLoggedIn}
                     />
                  )}
               />
               <Route
                  exact
                  path="/signup"
                  render={() => (
                     <SignUp
                        onLogin={this.login}
                        currentUser={this.state.currentUser}
                        isLoggedIn={this.state.isLoggedIn}
                     />
                  )}
               />
               <Route
                  exact
                  path="/users/:user_id"
                  render={routerProps => (
                     <UserContainer
                        {...routerProps}
                        onLogout={this.logout}
                        isLoggedIn={this.state.isLoggedIn}
                     />
                  )}
               />
               <Route
                  exact
                  path="/organizations"
                  component={OrganizationContainer}
               />
               <Route
                  exact
                  path="/organizations/:id"
                  render={routerProps => <OrganizationCard {...routerProps} />}
               />
               <Route exact path="/events" component={Event} />
               <Route
                  exact
                  path="/volunteer/edit"
                  render={routerProps => (
                     <EditVolunteer
                        {...routerProps}
                        currentUser={this.state.currentUser}
                     />
                  )}
               />
               <Route exact path="/events/new" component={NewEvent} />
               <Route
                  exact
                  path="/events/:id"
                  render={routerProps => (
                     <EventDetail
                        {...routerProps}
                        currentUser={this.state.currentUser}
                        isLoggedIn={this.state.isLoggedIn}
                     />
                  )}
               />
               <Footer />
            </div>
         </Router>
      );
   }
}

export default App;
