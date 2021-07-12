import React, {Component} from "react"
import axios from "axios"
import { Link, Route } from "react-router-dom";

class Signup extends Component {
    constructor() {
        super()
        this.state= {
            data: {
                name: "",
                email: "",
                password: "",
                interest: "",
                photo: ""
                
            }
        }
    }

    handleChange = (event) => {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/auth/usersignup", this.state.data)
        .then(resp => {
            this.props.history.push(`/profile/${resp.data.id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/about">About</Link></li>    
                    <li><Link to="/posts">Travel Posts</Link></li>                    
                </nav>
                <div>
                    <h2>SIGN UP</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div><label>Name: </label><input onChange={this.handleChange} type="text" name="name" placeholder="name"/></div>
                        <div><label>Email: </label><input onChange={this.handleChange} type="text" name="email" placeholder="email"/></div>
                        <div><label>Password: </label><input onChange={this.handleChange} type="password" name="password" placeholder="password"/></div>
                        <div><label>Interest: </label><input onChange={this.handleChange} type="text" name="interest" placeholder="interest"/></div>
                        <div><label>Photo: </label><input onChange={this.handleChange} type="img" name="photo" placeholder="photo"/></div>                 
                    
                        <input type="submit" value="Sign Up"/>           
                    </form>
                </div>
            </div> 
        )
    }
}    

export default Signup