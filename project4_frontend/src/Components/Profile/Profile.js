import React from 'react';
import Post from '../Post/Post';

const Profile = (props) => {
    return (
        <div>
            <div className="profile">
                <img src={props.user.photo_url} alt="user" />
                <div>
                    <p>Username: {props.user.username}</p>
                    <p>Password: {props.user.password}</p>
                    <p>About: {props.user.about}</p>
                </div>
            </div>
            {/* <div className="post"> 
                <Post
                    post={post}                     
                />
            </div> */}
        </div>
        )
    } 
    

export default Profile;