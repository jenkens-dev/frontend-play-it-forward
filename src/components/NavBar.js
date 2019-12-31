import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import logo from '../play it forward v2.png';

export default class MenuExampleSecondary extends Component {
   state = { activeItem: 'home' };

   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

   render() {
      const { activeItem } = this.state;

      return (
         <Menu stackable>
            <Link to="/">
               <Menu.Item
                  name="home"
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
               >
                  <img src={logo} />
               </Menu.Item>
            </Link>
            <Link to="/events">
               <Menu.Item
                  name="events"
                  active={activeItem === 'events'}
                  onClick={this.handleItemClick}
               />
            </Link>
            <Menu.Menu position="right">
               <Link to="/login">
                  <Menu.Item
                     name="login"
                     active={activeItem === 'login'}
                     onClick={this.handleItemClick}
                  />
               </Link>
            </Menu.Menu>
         </Menu>
      );
   }
}
