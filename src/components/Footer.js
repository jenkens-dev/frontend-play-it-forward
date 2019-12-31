import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const Footer = () => (
   <div>
      <Menu inverted fixed="bottom">
         <Link to="/about">
            <Menu.Item>About</Menu.Item>
         </Link>
         <Menu.Item>
            <a
               target="_blank"
               href="https://github.com/Taljjaa/frontend-play-it-forward"
            >
               <Icon name="github" />
            </a>
         </Menu.Item>
         <Menu.Item>
            <a target="_blank" href="https://twitter.com/Talliaa_">
               <Icon name="twitter" />
            </a>
         </Menu.Item>
      </Menu>
   </div>
);

export default Footer;
