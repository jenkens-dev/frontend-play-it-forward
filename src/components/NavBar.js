import React from 'react';
import NotLoggedInNav from './NotLoggedInNav';
import LoggedInNav from './LoggedInNav';

const NavBar = props => {
   return props.isLoggedIn ? <LoggedInNav /> : <NotLoggedInNav />;
};

export default NavBar;
