import React from 'react';
import { Segment } from 'semantic-ui-react';
import EventCard from './EventCard';

class OrganizationCard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         organization: [],
      };
   }
   componentDidMount = async () => {
      console.log('mounting');
      const organizationFetch = await fetch(
         `http://localhost:3000/organizations/${this.props.match.params.id}`,
      );
      const organizationJson = await organizationFetch.json();
      console.log(organizationJson, 'json');
      this.setState({
         organization: organizationJson,
      });
   };
   createEventCards = events => {
      console.log(events);
      if (events) {
         return events.map(event => {
            let testEvent = {
               id: event.id,
               title: event.title,
               description: event.description,
               location: event.location,
               organization: {
                  id: this.state.organization.id,
                  logo: this.state.organization.logo,
                  display_name: this.state.organization.display_name,
               },
            };
            console.log(event);
            return <EventCard key={event.id} event={testEvent} />;
         });
      }
   };
   render() {
      console.log('rendering');
      const {
         display_name,
         address,
         logo,
         description,
         mission,
         contact,
         events,
      } = this.state.organization;
      console.log(events);
      return (
         <div>
            <Segment.Group>
               <Segment>
                  <img src={logo} alt={`${display_name}'s logo`} />
               </Segment>
               <Segment>{display_name}</Segment>
               <Segment>{mission}</Segment>
               <Segment>{address}</Segment>
               <Segment>{description}</Segment>
               <Segment>{contact}</Segment>
            </Segment.Group>
            {this.createEventCards(events)}
         </div>
      );
   }
}

export default OrganizationCard;
