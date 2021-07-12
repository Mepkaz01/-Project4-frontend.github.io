import React, {Component} from "react"
import axios from "axios"

class Login extends Component {
    constructor(props) {
        super(props)
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
        axios.post('users/', this.state.data)
        .then(resp => {
            console.log("User Logged In")
            console.log(resp)
            this.props.history.push(`/profile/${resp.data.id}`)  
        })
        .catch(err => {
            console.log(err)
        })
    }


    render(props) {
        console.log(this.props)
        return (
            
            <div> 
                <h2 style={{fontsize:"bolder"}}>LOG IN</h2>
                <div>
                    <form onSubmit={this.handleSubmit} >
                        <div><label>Username: </label><input onChange={this.handleChange} type="text" name="username" placeholder="username" /></div>
                        <div><label>Password: </label><input onChange={this.handleChange} type="password" name="password" placeholder="password"/></div>
                                        
                        <input type="submit" value="Login" />
                    </form>                
                </div>
            </div>
        )
    }
}    


export default Login