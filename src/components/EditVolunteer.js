import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const EditVolunteer = ({ currentUser }) => {
  const [bio, setBio] = useState('');
  const history = useHistory();

  const handleChange = e => {
    setBio(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:3000/volunteers/${currentUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bio,
      }),
    }).then(() => history.push(`/users/${currentUser.id}`));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Bio:
        <input type="text" value={bio} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default EditVolunteer;
