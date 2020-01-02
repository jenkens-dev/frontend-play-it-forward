import React from 'react';
import Organization from './Organization';

class OrganizationContainer extends React.Component {
   constructor() {
      super();
      this.state = {
         organizations: [],
      };
   }
   componentDidMount() {
      fetch('http://localhost:3000/organizations')
         .then(resp => resp.json())
         .then(data => {
            console.log(data);
            this.setState({
               organizations: data,
            });
         });
   }

   createOrgCards = () => {
      return this.state.organizations.map(org => {
         return <Organization key={org.id} org={org} />;
      });
   };
   render() {
      return (
         <div>
            <h1>Organizations</h1>
            {this.createOrgCards()}
         </div>
      );
   }
}

export default OrganizationContainer;
