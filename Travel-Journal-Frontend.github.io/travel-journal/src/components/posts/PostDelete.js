import axios from 'axios'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

class PostDelete extends Component {

    constructor(props){ 
    super(props)
    this.state={
        post:{
            adminId: ""
        }
    }
}
componentDidMount =()=>{
    axios.get(`http://localhost:3001/post/${this.props.match.params.indx}`)
    .then(resp =>{
        console.log(resp)
        this.setState({
                post: resp.data
            })
        }
    )
}

handleDelete = (event) => {
    event.preventDefault()
    axios.delete(`http://localhost:3001/post/${this.props.match.params.indx}`)
    .then(resp => {
        this.props.history.push(`/adminedit/${this.state.post.adminId}`)
    })       
    
}

render = (props)=>{
    const post=this.state.post

    return(
        <div>            
            <h1> Post's Detail </h1>
            <div>
                <h4>{post.country}<span>{post.city}</span></h4>
                <h4>{post.createdAt}</h4>
                <button onClick={this.handleDelete}>Confirm Removal</button> 
                <Link to={`/adminedit/${post.adminId}`}><button>Cancel</button></Link>
            </div>
        </div>
    )
}
}
export default PostDelete;