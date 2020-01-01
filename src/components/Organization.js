import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Organization = ({ org: { display_name, logo, id, mission } }) => {
   return (
      <Card>
         <Card.Content>
            <Image src={logo} wrapped ui={false} />
            <Card.Header>{display_name}</Card.Header>
            <Link to={`/organizations/${id}`}>
               <Card.Meta>{`By ${display_name}`}</Card.Meta>
            </Link>
            <Card.Description>{mission}</Card.Description>
         </Card.Content>
      </Card>
   );
};

export default Organization;
