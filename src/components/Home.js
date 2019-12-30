import React from 'react';
import NavBar from './NavBar';
import coverphoto from '../perry-grone-lbLgFFlADrY-unsplash.jpg';

const Home = () => {
   return (
      <div>
         <NavBar />
         <div className="container">
            <img src={coverphoto} alt="group of people huddling" />
         </div>
         <div className="coverText">Play It Forward</div>
         <h2>Upcoming Events</h2>
      </div>
   );
};

export default Home;
