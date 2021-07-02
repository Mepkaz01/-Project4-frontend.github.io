import React from 'react';
import Post from '../Post/Post';

const Posts = (props) => {
    return (
        <div className="post">
            { props.posts.map(post => 
                <Post
                  post={post}
                />
            )}    
        </div>
    )
}

export default Posts;