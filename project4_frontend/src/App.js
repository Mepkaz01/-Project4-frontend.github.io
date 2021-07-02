import './App.css';
import React, { Component } from 'react';
import {Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Profile from './Components/Profile/Profile';
import Post from './Components/Post/Post';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      post: [],
      csrfToken: null
    }
  }  

  async componentDidMount() {
    const users = await axios('http://localhost:8000');
    const getUser = { id: users.data[0].pk, ...users.data[0].fields };
    const posts = await axios(`http://localhost:8000/profile/posts/${getUser.id}/`);
    const getPosts = posts.data.map(post => {
      const getPost = { id: post.pk, ...post.fields }
      return getPost
    })
    this.setState({
      user: getUser,
      post: getPosts
    })
  }


  render() {
    return (
      <div className="App">
        <header>
            <h1>THIS IS TRAVEL JOURNAL</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/posts">Travel Posts</Link></li>
              </ul>
            </nav>
        </header>
        <Route path="/profile" render={() =>
            <Profile 
              user={this.state.user} 
              post={this.state.post}
            />
        }/>
        <Route exact path="/posts" render={() => 
            <Post 
              post={this.state.post} 
            />
        }/>   
        
      </div>
    );
  }
}  


export default withRouter(App);
