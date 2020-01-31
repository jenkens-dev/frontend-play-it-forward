import React from 'react';
import { Segment } from 'semantic-ui-react';
import EventCard from '../Events/EventCard';
import useNetworkResource from '../../hooks/useNetworkResource';

const OrganizationCard = ({ match }) => {
   const [organization, fetched] = useNetworkResource(
      `http://localhost:3000/organizations/${match.params.id}`,
   );

   if (!fetched) {
      return null;
   }

   const {
      display_name,
      address,
      logo,
      description,
      mission,
      contact,
      events,
   } = organization;

   return (
      <div>
         <Segment.Group>
            <Segment>
               <img src={logo} alt={`${display_name}'s logo`} />
            </Segment>
            <Segment>{display_name}</Segment>
            <Segment>{mission}</Segment>
            <Segment>{address}</Segment>
            <Segment>{description}</Segment>
            <Segment>{contact}</Segment>
         </Segment.Group>
         {events &&
            events
               .map(event => ({
                  ...event,
                  organization,
               }))
               .map(event => <EventCard key={event.id} event={event} />)}
         )}
      </div>
   );
};

export default OrganizationCard;
