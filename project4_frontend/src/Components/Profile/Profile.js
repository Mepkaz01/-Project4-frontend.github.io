import React from 'react';
import Posts from '../Posts/Posts';

const Profile = (props) => {
    return (
        <div>
            <div className="profile">
                <img src={props.user.photo_url} alt="user" width="400" height="300"/>
                <div>
                    <p>Username: {props.user.username}</p>
                    <p>Password: {props.user.password}</p>
                    <p>About: {props.user.about}</p>
                </div>
            </div>
            <div className="post"> 
                <Posts
                    posts={props.posts}                     
                />
            </div>
        </div>
        )
    } 
    

export default Profile;