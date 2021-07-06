import React from 'react';
import { Link, Route } from "react-router-dom";

const Posts = (props) => {
    return (
        <div className="post">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">About Me</Link></li>
                </ul>
            </nav>
            <h1>My Travel Posts</h1>
            { props.posts.map(post =>
                <div>
                    <li>Date: {post.date_posted}</li>
                    <li>Country: {post.country}</li>
                    <li>City: {post.city}</li>
                    <li>Things To Do: {post.to_do}</li>
                    <li>Where To Eat: {post.to_eat}</li>
                    <li>Where To Stay: {post.to_stay}</li>
                    <li>Traveler's Tips: {post.tips}</li>
                    <li>Budget: {post.cost} USD</li>
                    <img src={post.image} alt="pic" width="400" height="300"/>
                </div>
            )}        
        </div>
    )
}

export default Posts;