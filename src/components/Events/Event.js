import React from 'react';
import EventContainer from './EventContainer';
import { Input } from 'semantic-ui-react';

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
