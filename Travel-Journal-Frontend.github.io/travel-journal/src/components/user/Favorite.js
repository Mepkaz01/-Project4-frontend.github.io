import React, { Component } from 'react';
import {Route, Link, withRouter } from 'react-router-dom';
import Profile from './Profile';
import Posts from '../posts/Posts';
import axios from 'axios';

class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
          userId: this.props.user.id,
          posts: [],
          favorites: []
          
          
          
        }
      }

      componentDidMount = () => {
        axios.get("http://localhost:3001/post/all")
        .then(response => {
            
            this.setState({
                posts:response.data.posts[0]
                
            })
        })
    }
    
         
      editFav = (list) => {
        
        this.setState({
          favorites: list
        })
      }
    
      addFav = (postId) => {
        
        const newFav = {postId: postId}
        axios.post(`http://localhost:3001/favorite/profile/${this.state.userId}`, newFav)
          .then(response => {
            axios.get(`http://localhost:3001/favorite/profile/${this.state.userId}`)
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
          axios.get(`http://localhost:3001/favorite${favoriteId}/profile/${this.state.userId}`)
          .then(resp => {
              
              this.setState({
                  favorites:resp.data
              })
              
          })
        })
      }

      validateFav = (id) => {
        for (let i=0; i < this.state.favorites.length; i++) {
            
            if (this.state.favorites[i].postId == this.state.posts.id) {
                this.favoriteId = this.state.favorites[i].id
                return true
            }
        }
        return false
    }


    render() {
        return (
            <div>
                <Route
                    path="profile/:id" render={(props) =>
                    <Profile 
                        editFav={this.editFav}
                        delFav={this.delFav}
                    />}                    
                />
                <Route
                    path="/posts" render={(props) =>
                    <Posts
                        userId={this.state.userId}
                        favorites={this.state.favorites}
                        addFav={this.addFav}
                        validateFav={this.validateFav}    
                    />}    
                />   
            </div>    
        );
    }
}

export default Favorite
              

            