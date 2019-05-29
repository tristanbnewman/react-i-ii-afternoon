import React from 'react';
import './ProfileDisplay.css';
import ProfileNav from '../ProfileNav/ProfileNav';

const ProfileDisplay = (props) =>{
    return (
        <div className="profileDisplay">
            <h2 className="profileId">{`${props.userIndex + 1} / ${props.numOfUsers}`}</h2>
            {props.children}
            <ProfileNav 
            next={props.next}
            previous={props.previous}
            />
        </div>
    )
}

export default ProfileDisplay;