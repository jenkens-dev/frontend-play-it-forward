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
import './App.css';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         isLoggedIn: false,
         currentUser: '',
      };
   }

   login = volunteer => {
      this.setState({
         isLoggedIn: true,
         currentUser: volunteer,
      });
   };

   render() {
      return (
         <Router>
            <div>
               <NavBar />
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
                  path="/users/:id"
                  render={() => <UserContainer />}
               />
               <Route
                  exact
                  path="/organizations"
                  component={OrganizationContainer}
               />
               <Route
                  exact
                  path="/organizations/:id"
                  render={() => <OrganizationContainer />}
               />
               <Route exact path="/events" component={Event} />
               <Route exact path="/events/new" component={NewEvent} />
               <Route
                  exact
                  path="/events/:id"
                  render={() => <EventContainer />}
               />
               <Footer />
            </div>
         </Router>
      );
   }
}

export default App;
