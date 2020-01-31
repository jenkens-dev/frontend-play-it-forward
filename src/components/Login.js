import React, { useState } from 'react';
import { Button, Radio, Form } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

const Login = ({ currentUser, onLogin }) => {
   const [userType, setUserType] = useState('volunteer');
   const [username, setUsername] = useState('');

   const handleChange = (_, { value }) => setUserType(value);

   const handleUsernameChange = e => {
      setUsername(e.target.value);
   };

   const handleSubmit = e => {
      e.preventDefault();

      fetch(`http://localhost:3000/${userType}s-login`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            username,
         }),
      })
         .then(resp => resp.json())
         .then(json => {
            onLogin(json);
         })
         .catch(err => console.log('Invalid Username'));
   };

   if (currentUser) {
      return <Redirect to="/" />;
   }

   return (
      <>
         <h1>Login</h1>
         <Form onSubmit={handleSubmit}>
            <Form.Field>
               <Radio
                  label="Volunteer"
                  name="radioGroup"
                  value="volunteer"
                  checked={userType === 'volunteer'}
                  onChange={handleChange}
               />
            </Form.Field>
            <Form.Field>
               <Radio
                  label="Organization"
                  name="radioGroup"
                  value="organization"
                  checked={userType === 'organization'}
                  onChange={handleChange}
               />
            </Form.Field>
            <Form.Field>
               <label>Username</label>
               <input
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
               />
            </Form.Field>
            <Button type="submit">Submit</Button>
            <Link to="/signup">Sign Up</Link>
         </Form>
      </>
   );
};

export default Login;
