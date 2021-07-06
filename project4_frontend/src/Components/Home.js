import React from 'react'
import { Link, Route } from "react-router-dom";
import axios from 'axios'

class Home extends React.Component {
    render = () => {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/profile">About Me</Link></li>
                            <li><Link to="/posts">Travel Posts</Link></li>
                        </ul>
                    </nav>
                    <h1>THIS IS TRAVEL JOURNAL</h1>                
                </header>
            </div>
        )
    }
}

export default Home;

