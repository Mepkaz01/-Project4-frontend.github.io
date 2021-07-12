import axios from 'axios'
import React, {Component} from 'react'
import { Link } from "react-router-dom";

class AdminPosts extends Component {

    constructor (props) { 
        super(props)
        this.state = {
             posts: [],
                                      
            }             
    }

    

    componentDidMount =()=>{
             
        axios.get("http://localhost:3001/post/all")
        .then(resp => {
            console.log(resp)
            this.setState ({
                posts: resp.data
               
            })
        }
    )
}



    thousands_separators = (num) => 
        {
            let num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        }

    
    render = (props)=>{
        console.log(this.props.admin.id)
        return(
            <div>
                <h1>My Travel Posts</h1>
                <div>
                {this.state.posts.map(post => {
                   return post.adminId === this.props.admin.id ?
                   
                        <ul>
                            <li>Date: {post.createdAt}</li>
                            <li>Country: {post.country}</li>
                            <li>City: {post.city}</li>
                            <li>Things To Do: {post.thingsToDo}</li>
                            <li>Where To Eat: {post.whereToEat}</li>
                            <li>Where To Stay: {post.whereToStay}</li>
                            <li>Traveler's Tips: {post.tips}</li>
                            <li>Budget: {this.thousands_separators(post.cost)} USD</li>
                            <img src={post.image} alt="pic" width="400" height="300"/>
                            <br></br>           
                            <Link to={`/postedit/${post.id}`}><button>Edit Post</button></Link>
                            <Link to={`/postdelete/${post.id}`}><button>Delete Post</button></Link>   
                        </ul>
                        
                    : null 
                })}
                </div>
            </div>
            ) 
        }           

    }

export default AdminPosts;
