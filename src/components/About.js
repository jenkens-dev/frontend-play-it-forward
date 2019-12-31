import React from 'react';
import groupPhoto from '../play-it-forward-group.jpg';
import discussionPhoto from '../play-it-forward-discussion.jpg';
import { Grid, Image } from 'semantic-ui-react';

const About = () => {
   return (
      <div>
         <h1>About Us</h1>
         <p>
            PlayItForward aims to help encourage people to volunteer by
            rewarding them with points.
         </p>
         <Grid columns="equal">
            <Grid.Column>
               <Image src={groupPhoto} />
            </Grid.Column>
            <Grid.Column>
               <Image src={discussionPhoto} />
            </Grid.Column>
         </Grid>
      </div>
   );
};

export default About;
