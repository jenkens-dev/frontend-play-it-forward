import React from 'react';
import EventContainer from './EventContainer';
import { Icon, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Event extends React.Component {
   constructor() {
      super();
      this.state = {
         search: '',
      };
   }

   handleChange = event => {
      this.setState({
         search: event.target.value,
      });
   };

   render() {
      return (
         <div>
            <Input
               icon={{ name: 'search', circular: true }}
               placeholder="Search..."
            />
            <EventContainer />
         </div>
      );
   }
}

export default Event;
