import React from 'react';
import { Navbar} from 'reactstrap';
import logo from './logo.png';

const Header = (props) => {
 return (
   <div>
     <Navbar fluid style={{'background-color': 'lightblue', 'margin-bottom': '10px'}}>
         <img style={{'height': '100px'}} src={logo}/>
         <h1 className="display-6">Beyond Mason Street</h1>
     </Navbar>
   </div>
 );
};

export default Header;