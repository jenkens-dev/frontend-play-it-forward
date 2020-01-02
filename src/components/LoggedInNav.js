import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import logo from '../play it forward v2.png';

export default class NotLoggedInNav extends Component {
   state = { activeItem: 'home' };

   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

   render() {
      const { activeItem } = this.state;
      return (
         <Menu stackable>
            <Menu.Item
               name="home"
               active={activeItem === 'home'}
               onClick={this.handleItemClick}
               as={Link}
               to="/"
            >
               <img src={logo} alt="PlayItForward logo" />
            </Menu.Item>
            <Menu.Item
               name="events"
               active={activeItem === 'events'}
               onClick={this.handleItemClick}
               as={Link}
               to="/events"
            />
            <Menu.Item
               name="organizations"
               active={activeItem === 'organizations'}
               onClick={this.handleItemClick}
               as={Link}
               to="/organizations"
            />
            <Menu.Menu position="right">
               <Menu.Item
                  as={Link}
                  to={`/users/${this.props.currentUser.id}`}
                  name="user"
                  active={activeItem === 'user'}
                  onClick={this.handleItemClick}
               >
                  <Icon name="user" />
               </Menu.Item>
            </Menu.Menu>
         </Menu>
      );
   }
}
