import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Radio, Form } from 'semantic-ui-react';

class SignUp extends React.Component {
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
      console.log(this.state);
      e.preventDefault();
      fetch(`http://localhost:3000/${this.state.value}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            username: `${this.state.username}`,
         }),
      })
         .then(console.log("home"))
   };

   render() {
      return (
         <Form onSubmit={this.handleSubmit}>
            <Form.Field>
               <Radio
                  label="Volunteer"
                  name="radioGroup"
                  value="volunteers"
                  checked={this.state.value === 'volunteers'}
                  onChange={this.handleChange}
               />
            </Form.Field>
            <Form.Field>
               <Radio
                  label="Organization"
                  name="radioGroup"
                  value="organizations"
                  checked={this.state.value === 'organizations'}
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
         </Form>
      );
   }
}

export default SignUp;
