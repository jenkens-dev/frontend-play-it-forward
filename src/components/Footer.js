import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const Footer = () => (
   <div>
      <Menu inverted>
         <Link to="/about">
            <Menu.Item>About</Menu.Item>
         </Link>
         <Menu.Item>
            <a
               target="_blank"
               href="https://github.com/Taljjaa/frontend-play-it-forward"
               rel="noopener noreferrer"
            >
               <Icon name="github" />
            </a>
         </Menu.Item>
         <Menu.Item>
            <a
               target="_blank"
               href="https://twitter.com/Talliaa_"
               rel="noopener noreferrer"
            >
               <Icon name="twitter" />
            </a>
         </Menu.Item>
      </Menu>
   </div>
);

export default Footer;
