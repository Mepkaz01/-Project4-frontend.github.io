import './App.css';
import React, { Component } from 'react';
import {Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Home from "./Components/Home"
import Posts from './Components/Posts';
import Profile from './Components/Profile';
import Login from './Components/Admin/Login';
import UserProfile from './Components/Admin/UserProfile';
import UserPosts from './Components/Admin/UserPosts';
import CreatePost from './Components/Admin/CreatePost';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      posts: [],
      csrfToken: null
    }
  }  

  getUpdatedPosts = async id => {
    const updatePosts = await axios(`/profile/${id}`)
    const updatePostIds = updatePosts.data.map(post => post.fields.post);
    return updatePostIds
  }


  async componentDidMount() {
    const users = await axios('/users/');
    const updatePostIds = await this.getUpdatedPosts(users.data[0].pk)
    const getUser = { id: users.data[0].pk, ...users.data[0].fields, updatePosts: updatePostIds };
    const posts = await axios(`/profile/posts/${getUser.id}/`);
    console.log(getUser);
    const getPosts = posts.data.map(post => {
      const getPost = { id: post.pk, ...post.fields }
      return getPost
    })
    console.log(getPosts)
    this.setState({
      user: getUser,
      posts: getPosts
    })
  }

  editPost = async id => {
    const updatedPost = await axios(`/posts/${id}/${this.state.user.id}/`);
    const updatedPosts = this.state.posts.map(post =>
      post.id === id ? { id: updatedPost.data[0].pk, ...updatedPost.data[0].fields } : post
    )

    const updatedPostIds = await this.getUpdatedPosts(this.state.user.id);

    const user = this.state.user;
    user.updatePosts = updatedPostIds;

    this.setState({
      posts: updatedPosts
    })
  }

  createTweet = async (event, postContent) => {
    event.preventDefault();
    
    const response = await axios.post(`/posts/${this.state.user.id}/`, { data: postContent });
    console.log(response) 
    const newPost = { id: response.data[0].pk, ...response.data[0].fields };
    const posts = this.state.posts;
    posts.push(newPost);
    this.setState({
      posts
    })

    this.props.history.push('/posts');
  }  

  render() {
    return (
      <div className="App">

        <Route exact path="/" exact render={() => 
          <Home />} 
        />       
             
        <Route exact path="/profile" render={() =>
          <Profile 
            user={this.state.user} 
            // posts={this.state.posts}
          />
        }/>

        <Route exact path="/posts" render={() => 
          <Posts 
            posts={this.state.posts} 
          />
        }/>
                           
        <Route path="/login" render={() =>
          <Login
            user={this.state.user} 
          /> 
        }/>

        <Route path="/profile/:id" render={() =>
          <UserProfile
            user={this.state.user} 
            posts={this.state.posts}
            editPost={this.editPost}
          /> 
        }/>  

        <Route path="/posts/:userid" render={() =>
          <UserPosts
            posts={this.state.posts} 
            editPost={this.editPost}
          /> 
        }/>  

        <Route path="/post/new" render={()=>
          <CreatePost 
            createPost={this.createPost}
          />  
        }/>

      </div>
    );
  }
}  


export default withRouter(App);
