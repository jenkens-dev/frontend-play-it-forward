import React from 'react';
import EventCard from './EventCard';

class EventContainer extends React.Component {
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

   createEventCards = () => {
      return this.state.events.map(event => {
         return <EventCard key={event.id} event={event} />;
      });
   };
   render() {
      return (
         <div>
            <h1>Events</h1>
            {this.createEventCards()}
         </div>
      );
   }
}

export default EventContainer;
