import React from 'react';
import EventCard from './EventCard';
import useNetworkResource from '../../hooks/useNetworkResource';

const EventContainer = () => {
   const [events, fetched] = useNetworkResource(`http://localhost:3000/events`);

   if (!fetched) {
      return null;
   }

   return (
      <div>
         <h1>Events</h1>
         {events.map(event => (
            <EventCard key={event.id} event={event} />
         ))}
      </div>
   );
};

export default EventContainer;
