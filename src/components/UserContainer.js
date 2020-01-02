import React from 'react';
import User from './User';
import { Redirect } from 'react-router-dom';

class UserContainer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         user: '',
      };
   }
   componentDidMount() {
      fetch(
         `http://localhost:3000/volunteers/${this.props.match.params.user_id}`,
      )
         .then(resp => resp.json())
         .then(json => {
            this.setState({
               user: json,
            });
         });
   }

   render() {
      console.log(this.props);
      return (
         <div>
            {this.props.isLoggedIn ? (
               <User user={this.state.user} onLogout={this.props.onLogout} />
            ) : (
               <Redirect to="/login" />
            )}
         </div>
      );
   }
}

export default UserContainer;
