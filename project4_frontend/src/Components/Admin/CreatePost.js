import React, { useState } from 'react';


const CreatePost = (props) => {
    const [ content, updateContent ] = useState("");
    console.log(content);

    const onChange = event => {
        updateContent(event.target.value)
    }

    return (
        <div className="container">
            <h2>Write Your Next Post Here:</h2>
            <form onSubmit = {(event) => props.createPost(event, content)}>                <input type="text" maxlength="280" name="content" value={content} onChange={onChange} />
                <button>SEND</button>
            </form>
        </div>

    )
}

export default CreatePost;
