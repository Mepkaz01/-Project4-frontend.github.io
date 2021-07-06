import React from 'react';

const UserPost = (props) => {
    return (
        <div className="post">
            { props.posts.map(post =>
                <div>
                    <li>{post.user}</li>
                    <li>{post.date_traveled}</li>
                    <li>{post.country}</li>
                    <li>{post.city}</li>
                    <li>{post.attractions}</li>
                    <li>{post.recommendations}</li>
                    <img src={post.photo_url} alt="pic" width="400" height="300"/>
                    <button>Update Post</button>
                </div>
            )}    
        </div>
    )
}

export default UserPost;