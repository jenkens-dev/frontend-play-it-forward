import React from 'react';
import {
   Dimmer,
   Loader as BaseLoader,
   Image,
   Segment,
} from 'semantic-ui-react';

export default function Loader() {
   return (
      <Segment>
         <Dimmer active inverted>
            <BaseLoader inverted>Loading</BaseLoader>
         </Dimmer>

         <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
   );
}
