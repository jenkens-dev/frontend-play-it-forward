import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const EventCard = props => {
   console.log(props);
   return (
      <Card>
         <Card.Content>
            <Image src={props.event.organization.logo} wrapped ui={false} />
            <Card.Header>{props.event.title}</Card.Header>
            <Link to={`/organizations/${props.event.organization.id}`}>
               <Card.Meta>{`By ${props.event.organization.display_name}`}</Card.Meta>
            </Link>
            <Card.Description>{props.event.description}</Card.Description>
         </Card.Content>
         <Card.Content extra>{props.event.location}</Card.Content>
      </Card>
   );
};

export default EventCard;
