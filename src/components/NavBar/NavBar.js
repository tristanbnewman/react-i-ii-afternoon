import React from 'react';
import './NavBar.css';

const NavBar = (props) =>{

    return <nav>
    <button className="nav-button">Home</button>
    {props.children}
  </nav>
}

export default NavBar;