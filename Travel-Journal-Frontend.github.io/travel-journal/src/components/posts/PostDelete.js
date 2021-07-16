import axios from 'axios';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    MDBBtn,
    MDBIcon,
      
  } from 'mdb-react-ui-kit';

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
        <div className='d-flex flex-column justify-content-center' style={{marginTop: '400px', textAlign: 'center', alignContent: 'center'}}>            
            <h1 style={{color: "orangered", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold"}}>Confirm Post Removal</h1>
            <div>
                <h2 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold", marginTop: "30px"}}>{post.city}<span>, {post.country}</span></h2>
                <div className="d-flex justify-content-evenly" style={{padding: "50px"}}>
                    <MDBBtn style={{ backgroundColor: 'red' }} onClick={this.handleDelete}><MDBIcon className='me-2' fas icon="trash-alt" />Confirm Removal</MDBBtn>
                    <Link to={`/adminedit/${post.adminId}`}><MDBBtn style={{ backgroundColor: 'blue' }}><MDBIcon fas icon="sign-out-alt" />Cancel</MDBBtn></Link>
                </div>     
            </div>
        </div>
    )
}
}
export default PostDelete;