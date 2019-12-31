import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar'
import './App.css';

function App() {
   return (
      <Router>
         <div>
           <NavBar/>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
         </div>
      </Router>
   );
}

export default App;
