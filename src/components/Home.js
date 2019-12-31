import React from 'react';
import NavBar from './NavBar';
import coverphoto from '../perry-grone-lbLgFFlADrY-unsplash.jpg';
import EventContainer from './EventContainer';

class Home extends React.Component {
   constructor() {
      super();
      this.state = {
         events: [],
      };
   }

   componentDidMount() {
      fetch('http://localhost:3000/events')
         .then(resp => resp.json())
         .then(data => {
            this.setState({
               events: data,
            });
         });
   }
   render() {
      return (
         <div>
            <NavBar />
            <div className="container">
               <img src={coverphoto} alt="group of people huddling" />
            </div>
            <div className="coverText">Play It Forward</div>
            <h2>Upcoming Events</h2>
            <EventContainer events={this.state.events} />
         </div>
      );
   }
}

export default Home;
