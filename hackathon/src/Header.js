import React from 'react';
import { Navbar} from 'reactstrap';

const Header = (props) => {
 return (
   <div>
     <Navbar fluid style={{'background-color': 'lightgray', 'margin-bottom': '10px'}}>
         <img style={{'height': '100px'}} src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/milwaukee-skyline-black-and-white-bekim-art.jpg"/>
         <h1 className="display-6">Beyond Mason Street</h1>
     </Navbar>
   </div>
 );
};

export default Header;