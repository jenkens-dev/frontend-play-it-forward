import React from 'react';
import { Button, Radio, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
   constructor() {
      super();
      this.state = {
         username: '',
      };
   }

   handleUsernameChange = e => {
      this.setState({
         username: e.target.value,
      });
   };

   handleChange = (e, { value }) => this.setState({ value });

   handleSubmit = e => {
      e.preventDefault();
   };

   render() {
      return (
         <div>
            <h1>Login</h1>
            <Form onSubmit={this.handleSubmit}>
               <Form.Field>
                  <Radio
                     label="Volunteer"
                     name="radioGroup"
                     value="volunteer"
                     checked={this.state.value === 'volunteer'}
                     onChange={this.handleChange}
                  />
               </Form.Field>
               <Form.Field>
                  <Radio
                     label="Organization"
                     name="radioGroup"
                     value="organization"
                     checked={this.state.value === 'organization'}
                     onChange={this.handleChange}
                  />
               </Form.Field>
               <Form.Field>
                  <label>Username</label>
                  <input
                     placeholder="Username"
                     value={this.state.username}
                     onChange={this.handleUsernameChange}
                  />
               </Form.Field>
               <Button type="submit">Submit</Button>
               <Link to="/signup">Sign Up</Link>
            </Form>
         </div>
      );
   }
}

export default Login;
