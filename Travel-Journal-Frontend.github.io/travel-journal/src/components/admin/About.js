import axios from 'axios'
import React, { Component } from 'react'
import { Link, Route } from  'react-router-dom'

class About extends Component {

    constructor(props){ 
    super(props)
    this.state={
        admin: []
        
             
        
    };
}

componentDidMount =()=>{
    axios.get("http://localhost:3001/admin/all")
    .then(resp =>{
        this.setState({
            admin: resp.data
            }) 
        }
    )
}

render = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    {/* <li><Link to="/posts">Travel Posts</Link></li> */}
                </ul>
            </nav>
            <h1>About Me</h1>
            <div>
            {this.state.admin.map(admin =>
                <div>
                    <p>Hello my name is {admin.name} and Welcome to My Travel Journal!</p>
                    <p>{admin.about}</p>
                    <img src={admin.photo} alt="user" width="400" height="300"/>
                    <br></br>
                    <h1>My Travel Bucket List</h1>
                    <ul>
                        <li>{admin.bucketList1}</li>
                        <img src={admin.bucketPhoto1} alt="user" width="400" height="300"/>
                        <li>{admin.bucketList2}</li>
                        <img src={admin.bucketPhoto2} alt="user" width="400" height="300"/>
                        <li>{admin.bucketList3}</li>
                        <img src={admin.bucketPhoto3} alt="user" width="400" height="300"/>
                        <li>{admin.bucketList4}</li>
                        <img src={admin.bucketPhoto4} alt="user" width="400" height="300"/>
                        <li>{admin.bucketList5}</li>
                        <img src={admin.bucketPhoto5} alt="user" width="400" height="300"/>
                    </ul>
                </div>            
            )}    
            </div>
        </div>
        )
    } 
}    
   
export default About;