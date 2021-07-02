import './App.css';
import React, { Component } from 'react';
import {Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Profile from './Components/Profile/Profile';
import Posts from './Components/Posts/Posts';


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
              posts={this.state.posts}
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
