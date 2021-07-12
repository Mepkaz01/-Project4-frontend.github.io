import React, {Component} from "react"
import axios from "axios"
import { Link, Route } from "react-router-dom";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                email: "",
                password: ""
                
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
        axios.post("http://localhost:3001/auth/userlogin", this.state.data)
        .then(resp => {
            this.props.history.push(`/profile/${resp.data.id}`)  
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        console.log(this.props)
        return (
            
            <div>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/posts">Travel Posts</Link></li>
                </nav>
                <div>
                    <h2>LOG IN</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div><label>Email: </label><input onChange={this.handleChange} type="text" name="email" placeholder="email" /></div>
                        <div><label>Password: </label><input onChange={this.handleChange} type="password" name="password" placeholder="password" /></div>
                        <input type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        )
    }
}    


export default Login