import React, {Component} from "react"
import axios from "axios"
import { Link } from "react-router-dom";

class AdminLogin extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                username: "",
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
        axios.post("http://localhost:3001/auth/adminlogin", this.state.data)
        .then(resp => {
            this.props.history.push(`/adminedit/${resp.data.id}`)  
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
                    <li><Link to="/about" >About</Link></li>
                    {/* <li><Link to="/posts">Travel Posts</Link></li> */}
                </nav>
                <div>
                    <h2>LOG IN</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div><label>Username: </label><input onChange={this.handleChange} type="text" name="username" placeholder="username" /></div>
                        <div><label>Password: </label><input onChange={this.handleChange} type="password" name="password" placeholder="password" /></div>
                        <input type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        )
    }
}    


export default AdminLogin