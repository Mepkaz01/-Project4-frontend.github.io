import axios from 'axios'
import React, { Component} from 'react'
import { Link, Route } from  'react-router-dom'

class BookmarkPosts extends Component {

    constructor (props) { 
        super(props)
        this.state = {
             posts: [],
             favoriteList: {},
             favorites: []
                                      
            }             
    }
    
    fetchPosts =()=>{
        axios.get("http://localhost:3001/post/all")
        .then(resp =>{
            this.setState({
                posts: resp.data
                }) 
            console.log(resp.data)    
            }
        )
    }
    
    fetchFavs =()=>{
        axios.get("http://localhost:3001/favorite/all")
        .then(resp =>{
            const data = resp.data
            this.setState({
                favoriteList: data,
                favorites: Object.keys(data)

                })
            console.log(data)    
            }
        )
    }

    componentDidMount =() => {

        this.fetchPosts();
        this.fetchFavs();
    }

    thousands_separators = (num) => 
        {
            let num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
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
        console.log()
        for (let i=0; i < this.state.favorites.id; i++) {
            
            if (this.state.favorites[i].postId == this.state.posts.id) {
                this.favoriteId = this.state.favorites[i].id
                return true
            }
        }
        return false
    }

    render = ()=>{
        console.log(this.props.user.id)
        console.log(this.state.favorites.userId)
        return(
            <div>
               
                <h1>Bookmark Posts</h1>
                <br></br>
                <br></br>
                <div>

                {this.state.posts.map(post => {
                    return this.state.favorites.userId === this.props.user.id ?
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
                        <br></br>
                        <li>Bookmark: {post.favorite}</li>
                        {this.validateFav(post.favorite)}                    
                        ? <button onClick={() => this.delFav(this.favoriteID)}>Remove Bookmark</button>
                        : <button onClick={() => this.addFav(this.state.post.favorite, this.state.favorites.id, this.props.user.id)}>Add Bookmark</button>
                    </div>
                : null    
                })}
                

                </div>
            </div>    

            
     
    )
}
}    


export default BookmarkPosts;    

