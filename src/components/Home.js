import React from 'react';
import coverphoto from '../perry-grone-lbLgFFlADrY-unsplash.jpg';
import EventContainer from './EventContainer';

class Home extends React.Component {
   constructor() {
      super();
      this.state = {
         events: [],
      };
   }
   render() {
      return (
         <div>
            <div className="container">
               <img src={coverphoto} alt="group of people huddling" />
            </div>
            <div className="coverText">Play It Forward</div>
            <EventContainer />
         </div>
      );
   }
}

export default Home;
