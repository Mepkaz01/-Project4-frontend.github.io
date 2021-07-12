import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Map from "./Map";

class Home extends Component {
    render = () => {
        return (
            <div>
               <nav>
                    <ul>
                        <li><Link to="/login">Log In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/posts">Travel Posts</Link></li>
                    </ul>
                </nav>
                <h1>MY TRAVEL JOURNAL</h1> 
                <div className="content">
                    <Map/>
                </div>
            </div>
        )
    }
}

export default Home;