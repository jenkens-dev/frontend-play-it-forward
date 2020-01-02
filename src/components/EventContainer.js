import React from 'react';
import EventCard from './EventCard';

// const EventContainer = props => {
//    const createEventCards = () => {
//       return props.events.map(event => {
//          return <Event key={event.id} event={event} />;
//       });
//    };
//    return <div>{createEventCards()}</div>;
// };

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
      return <div>{this.createEventCards()}</div>;
   }
}

export default EventContainer;
