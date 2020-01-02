import React from 'react';
import NotLoggedInNav from './NotLoggedInNav';
import LoggedInNav from './LoggedInNav';

const NavBar = props => {
   return props.isLoggedIn ? (
      <LoggedInNav currentUser={props.currentUser} />
   ) : (
      <NotLoggedInNav />
   );
};

export default NavBar;
