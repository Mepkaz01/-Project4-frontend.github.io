import './App.css';
import React, { Component } from 'react';
import {Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Home from "./Components/Home"
import Posts from './Components/Posts';
import Profile from './Components/Profile';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      posts: [],
      csrfToken: null
    }
  }  

  async componentDidMount() {
    const users = await axios('http://localhost:8000');
    const getUser = { id: users.data[0].pk, ...users.data[0].fields };
    const posts = await axios(`http://localhost:8000/profile/posts/${getUser.id}/`);
    console.log(posts);
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


  render() {
    return (
      <div className="App">

        <Route path="/" exact render={() => 
            <Home />} 
        />       
             
        <Route path="/profile" render={() =>
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
        
      </div>
    );
  }
}  


export default withRouter(App);
