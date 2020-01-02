import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Organization = ({ org: { display_name, logo, id, mission } }) => {
   return (
      <Card>
         <Card.Content>
            <Link to={`/organizations/${id}`}>
               <Image src={logo} wrapped ui={false} />
            </Link>
            <Card.Header>{display_name}</Card.Header>
            <Card.Description>{mission}</Card.Description>
         </Card.Content>
      </Card>
   );
};

export default Organization;
