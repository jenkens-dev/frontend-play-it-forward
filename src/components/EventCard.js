import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const EventCard = ({ event: { title, location, description } }) => {
   return (
      <Card>
         <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>{location}</Card.Meta>
            <Card.Description>{description}</Card.Description>
         </Card.Content>
      </Card>
   );
};

//testing
export default EventCard;
