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
      this.state = {};
   }
   render() {
      return (
         <Router>
            <div>
               <NavBar />
               <Route exact path="/" component={Home} />
               <Route exact path="/about" component={About} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/signup" component={SignUp} />
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
