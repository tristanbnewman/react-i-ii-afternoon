import React from 'react';
import './ProfileNav.css';

const ProfileNav = (props) =>{
    return(
        <div className="profileNav">
            <button onClick={props.previous}>Back</button>

            <div>
              <button className="blue">Edit</button>
              <button className="blue">Delete</button>
              <button className="blue">New</button>
            </div>

              <button onClick={props.next}>Next</button>
          
        </div>
    )
}

export default ProfileNav;