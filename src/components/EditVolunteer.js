import React from 'react';

class EditVolunteer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         bio: '',
      };
   }

   handleChange = e => {
      this.setState({
         bio: e.target.value,
      });
   };

   handleSubmit = e => {
      e.preventDefault();
      fetch(`http://localhost:3000/volunteers/${this.props.currentUser.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            bio: this.state.bio,
         }),
      })
         .then(resp => resp.json())
         .then(json => console.log(json));
   };

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <label>
               Bio:
               <input
                  type="text"
                  value={this.state.bio}
                  onChange={this.handleChange}
               />
            </label>
            <input type="submit" value="Submit" />
         </form>
      );
   }
}

export default EditVolunteer;
