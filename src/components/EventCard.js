import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const EventCard = ({
   event: {
      title,
      location,
      description,
      organization: { display_name, logo, id },
   },
}) => {
   return (
      <Card>
         <Card.Content>
            <Image src={logo} wrapped ui={false} />
            <Card.Header>{title}</Card.Header>
            <Link to={`/organizations/${id}`}>
               <Card.Meta>{`By ${display_name}`}</Card.Meta>
            </Link>
            <Card.Description>{description}</Card.Description>
         </Card.Content>
         <Card.Content extra>{location}</Card.Content>
      </Card>
   );
};

export default EventCard;
