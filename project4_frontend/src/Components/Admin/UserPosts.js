import React from 'react';
import { Link, Route } from "react-router-dom";

const UserPosts = (props) => {
    return (
        <div className="post">
            <nav>
                <ul>
                    <li><Link to="/posts/new">Create New Post</Link></li>
                    <li><Link to="/profile/:id">Back to Profile</Link></li>
                    <li><Link to="/">Log Out</Link></li>
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
                    <li>Useful: {post.useful} votes</li>
                    <button onClick={() => props.updateTweet(props.tweet.id)}>Was This Useful?</button>
                </div>
            )}        
        </div>
    )
}

export default UserPosts;