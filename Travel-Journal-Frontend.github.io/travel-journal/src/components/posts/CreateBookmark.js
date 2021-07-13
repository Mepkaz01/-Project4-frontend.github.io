import axios from 'axios'
import React, { Component} from 'react'
import { Link, Route } from  'react-router-dom'

class CreateBookmark extends Component {

    constructor(props){ 
    super(props)
    this.state={
        posts: [],
        post: [],
        favorties: []     
        
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

componentDidMount =()=>{
    axios.get("http://localhost:3001/favorite/all")
    .then(resp =>{
        this.setState({
            favorites: resp.data
            })
        console.log(resp.data)     
        }
    )
}

addFav = (favoriteId) => {
            
    const newFav = {favoriteId: this.state.favorites.id}
        axios.post(`http://localhost:3001/favorite/${favoriteId}/profile/${this.props.user.id}`, newFav)
        .then(response => {
        axios.get(`http://localhost:3001/favorite/${favoriteId}profile/${this.props.user.id}`)
        .then(resp => {
                    
        this.setState({
            favorites: resp.data
        })
                    
    })
    })
} 

delFav = (favoriteId) => {
                
    axios.delete(`http://localhost:3001/favorite/${favoriteId}`)
        .then(response => {
    axios.get(`http://localhost:3001/favorite${favoriteId}/profile/${this.props.user.id}`)
        .then(resp => {
            
            this.setState({
                favorites:resp.data
            })
            
        })
        })
    }  

validateFav = (id) => {
    for (let i=0; i < this.state.favorites.id; i++) {
        
        if (this.state.favorites[i].postId == this.state.posts.id) {
            this.favoriteId = this.state.favorites[i].id
            return true
        }
    }
    return false
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
                    <li>Bookmark: {post.favorite}</li>
                    <img src={post.image} alt="pic" width="400" height="300"/>
                    {this.validateFav(post.favorite)}                    
                    ? <button onClick={() => this.delFav(this.favoriteID)}>Remove Bookmark</button>
                    : <button onClick={() => this.addFav(this.state.post.favorite, this.props.favorites.id, this.props.userId)}>Add Bookmark</button>
                </div>
            )}
            </div>

        </div>
        </div>    

            
     
    )
}
}
export default CreateBookmark;