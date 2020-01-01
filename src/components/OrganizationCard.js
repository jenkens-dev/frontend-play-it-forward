import React from 'react';
import { Segment } from 'semantic-ui-react';

class OrganizationCard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         organization: [],
      };
   }
   componentDidMount() {
      fetch(`http://localhost:3000/organizations/${this.props.match.params.id}`)
         .then(resp => resp.json())
         .then(json => {
            console.log(json);
            this.setState({
               organization: json,
            });
         });
   }
   render() {
      const {
         display_name,
         address,
         logo,
         description,
         mission,
         contact,
      } = this.state.organization;
      return (
         <Segment.Group>
            <Segment>
               <img src={logo} />
            </Segment>
            <Segment>{display_name}</Segment>
            <Segment>{mission}</Segment>
            <Segment>{address}</Segment>
            <Segment>{description}</Segment>
            <Segment>{contact}</Segment>
         </Segment.Group>
      );
   }
}

export default OrganizationCard;
