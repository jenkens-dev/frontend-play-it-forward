import React from 'react';
// import { Redirect } from 'react-router-dom';
import { Button, Radio, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

class SignUp extends React.Component {
   constructor(props) {
      super(props);
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
      fetch(`http://localhost:3000/${this.state.value}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            username: `${this.state.username}`,
         }),
      })
         .then(resp => resp.json())
         .then(json => {
            this.props.onLogin(json);
            console.log(json);
         })
         .catch(err => console.log('Invalid Username'));
   };

   render() {
      if (this.props.isLoggedIn) {
         return <Redirect to="/" />;
      }
      return (
         <div>
            <h1>Sign Up</h1>
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
         </div>
      );
   }
}

export default SignUp;
