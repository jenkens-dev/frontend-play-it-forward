import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import useNetworkResource from '../../hooks/useNetworkResource';

const EventDetails = ({ currentUser, match }) => {
   const [event, fetched] = useNetworkResource(
      `http://localhost:3000/events/${match.params.id}`,
   );

   if (!fetched) {
      return null;
   }

   return (
      <div>
         <Segment.Group>
            <Segment>
               <img
                  src={event.organization.logo}
                  alt={`${event.organization.display_name}'s logo`}
               />
            </Segment>
            <Link to={`/organizations/${event.organization.id}`}>
               <Segment>{event.organization.display_name}</Segment>
            </Link>
            <Segment>{event.title}</Segment>
            <Segment>{event.location}</Segment>
            <Segment>{event.description}</Segment>
            <Segment>{`${event.volunteers.length} Attending`}</Segment>
            {currentUser ? <Button>Attend</Button> : <span />}
         </Segment.Group>
      </div>
   );
};

export default EventDetails;
