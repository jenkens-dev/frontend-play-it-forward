import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import useNetworkResource from '../hooks/useNetworkResource';

function Profile({ onLogout, currentUser, match }) {
   const { user_id: userId } = match.params;

   const [user, fetched, { error, forceRetry }] = useNetworkResource(
      `http://localhost:3000/volunteers/${userId}`,
   );

   if (!currentUser) {
      return <Redirect to="/login" />;
   }
   if (error) {
      return (
         <div>
            Sorry an error occurred. <button onClick={forceRetry}>retry</button>
         </div>
      );
   }

   if (!fetched) {
      return <Loader />;
   }

   const deleteVol = () => {
      fetch(`http://localhost:3000/volunteers/${user.id}`, {
         method: 'DELETE',
      })
         .then(resp => resp.json())
         .then(() => {
            onLogout();
         });
   };

   const { display_name: displayName, bio, points } = user;

   return (
      <div>
         <Link to="/volunteer/edit">
            <Button>Edit Profile</Button>
         </Link>
         <Button onClick={deleteVol}>Delete Profile</Button>
         <h2>{displayName}</h2>
         <p>{bio}</p>
         <p>Experience: {points}</p>
      </div>
   );
}

export default Profile;
