import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class EventDetails extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         event: {
            organization: '',
            volunteers: '',
         },
      };
   }
   componentDidMount = async () => {
      const eventFetch = await fetch(
         `http://localhost:3000/events/${this.props.match.params.id}`,
      );
      const eventJson = await eventFetch.json();
      console.log(eventJson, 'json');
      this.setState({
         event: eventJson,
      });
   };

   attendEvent = () => {
      //   fetch(`http://localhost:3000/events/${this.props.match.params.id}`), {};
   };

   render() {
      return (
         <div>
            <Segment.Group>
               <Segment>
                  <img
                     src={this.state.event.organization.logo}
                     alt={`${this.state.event.organization.display_name}'s logo`}
                  />
               </Segment>
               <Link to={`/organizations/${this.state.event.organization.id}`}>
                  <Segment>
                     {this.state.event.organization.display_name}
                  </Segment>
               </Link>
               <Segment>{this.state.event.title}</Segment>
               <Segment>{this.state.event.location}</Segment>
               <Segment>{this.state.event.description}</Segment>
               <Segment>{`${this.state.event.volunteers.length} Attending`}</Segment>
               {this.props.isLoggedIn ? (
                  <Button onClick={this.attendEvent}>Attend</Button>
               ) : (
                  <span></span>
               )}
            </Segment.Group>
         </div>
      );
   }
}

export default EventDetails;
