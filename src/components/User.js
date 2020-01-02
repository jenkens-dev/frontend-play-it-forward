import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const User = props => {
   console.log(props);
   console.log(props.user.id);

   const deleteVol = () => {
      fetch(`http://localhost:3000/volunteers/${props.user.id}`, {
         method: 'DELETE',
      })
         .then(resp => resp.json())
         .then(json => {
            props.onLogout();
         });
   };

   return (
      <div>
         <Link to="/volunteer/edit">
            <Button>Edit Profile</Button>
         </Link>
         <Button onClick={deleteVol}>Delete Profile</Button>
         <h2>{props.user.display_name}</h2>
         <p>{props.user.bio}</p>
         <p>Experience: {props.user.points}</p>
      </div>
   );
};

export default User;
