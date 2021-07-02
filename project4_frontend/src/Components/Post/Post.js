import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <p>{props.post.user}</p>
            <p>{props.post.date_traveled}</p>
            <p>{props.post.country}</p>
            <p>{props.post.city}</p>
            <p>{props.post.attractions}</p>
            <p>{props.post.recommendations}</p>
            <img src={props.post.photo_url} alt="pic" width="400" height="300"/>
            <button>Update Post</button>
        </div>
    )
}

export default Post;