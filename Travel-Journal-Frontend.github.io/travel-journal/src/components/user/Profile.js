import React, {Component} from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import ProfileEdit from "./ProfileEdit";
import Favorite from "./Favorite";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "",
                email: "",
                password: "",
                interest: "",
                photo: "",
                id: 0
            },
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:3001/user/profile/${this.props.match.params.id}`)
        .then(resp => {
           
            this.setState({

                data: resp.data
                
            })  
            
        })

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
        axios.put(`http://localhost:3001/user/profile/${this.props.match.params.id}`, this.state.data)
        .then(resp => {
            console.log("User Updated")
        })
    }

    handleDelete = (event) => {
        event.preventDefault()

        axios.delete(`http://localhost:3001/user/profile/${this.props.match.params.id}`)
        .then(resp => {
            this.props.history.push('/')
        })       
        
    }

  
    toggle1= () =>{
        
        this.setState({top:!this.state.top})
    }
    userPostToggle= () =>{
        
        this.setState({userPostTag:!this.state.userPostTag})
    }
    
    render() {
      
        const user = this.state.data
       

        return (
            <div>
                <nav>
                    <li><Link to="/">Log Out</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/posts">Travel Posts</Link></li>
                </nav>          
                <div>
                <h1>Welcome <span>{user.name}!</span></h1>
                </div>
                <div>
                  <ProfileEdit 
                    user={user}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                  />
                  <Favorite
                    user={user}
                  />                  
                </div>
            </div>
        )
    }
}    

export default Profile