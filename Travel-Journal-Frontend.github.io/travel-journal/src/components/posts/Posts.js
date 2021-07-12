import axios from 'axios'
import React, { Component} from 'react'
import { Link, Route } from  'react-router-dom'

class Posts extends Component {

    constructor(props){ 
    super(props)
    this.state={
        posts: [],
        post: []
             
        
    };
}

componentDidMount =()=>{
    axios.get("http://localhost:3001/post/all")
    .then(resp =>{
        this.setState({
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

filterPeru = () => {
    this.setState(
        {post: this.state.posts.filter( country => 
            country.country === "Peru")})
        
        }

filterTest = () => {
    this.setState(
        {post: this.state.posts.filter( country => 
            country.country === "test")})
                
        }        

render = (props)=>{

    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                </ul>
            </nav>
            <div>
            <h1>My Travel Posts</h1>
            <br></br>
            <br></br>
            <button onClick={this.filterPeru}>Peru</button>
            <button onClick={this.filterTest}>Test</button>
            <br></br>
            <br></br>
            <div>

            {this.state.post.map(post =>
                <div>
                    <li>Date: {post.createdAt}</li>
                    <li>Country: {post.country}</li>
                    <li>City: {post.city}</li>
                    <li>Things To Do: {post.thingsToDo}</li>
                    <li>Where To Eat: {post.whereToEat}</li>
                    <li>Where To Stay: {post.whereToStay}</li>
                    <li>Traveler's Tips: {post.tips}</li>
                    <li>Budget: {this.thousands_separators(post.cost)} USD</li>
                    <img src={post.image} alt="pic" width="400" height="300"/>
                    {this.props.validateFav(post.favorite)}                    
                    ? <button onClick={() => this.props.delFav(this.favoriteID)}>Remove from Favorites</button>
                    : <button onClick={() => this.props.addFav(this.state.post.favorite, this.props.favorites.id, this.props.userId)}>Add to Favorites</button>
                </div>
            )}
            </div>

        </div>
        </div>    

            
     
    )
}
}
export default Posts;