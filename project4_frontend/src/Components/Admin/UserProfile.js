import React from 'react';
import { Link, Route } from "react-router-dom";


const UserProfile = (props) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile/posts/:id">Travel Posts</Link></li>
                </ul>
            </nav>
            <h1>About Me</h1>
            <div className="profile">
                <img src={props.user.photo} alt="user" width="400" height="300"/>
                <div>
                    <p>Username: {props.user.username}</p>
                    <p>About: {props.user.about}</p>
                </div>
            </div>
            <div>
                <h1>Contact Me</h1>
            </div>
            
        </div>
        )
    } 
   
export default UserProfile;