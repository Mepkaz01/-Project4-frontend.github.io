import React, {Component} from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import ProfileEdit from "./ProfileEdit";
import BookmarkPosts from "../posts/BookmarkPosts";


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
            toggleView:false
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
  
    toggleView= () =>{
        
        this.setState({toggleView:!this.state.toggleView})
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
                </div>   
                <div>
                    <button onClick={this.toggleView}>View Bookmark Posts</button> 
                    <Link to={`/bookmarkposts/${user.id}`}><button>Create Bookmark Posts</button></Link> 
                    {this.state.toggleView ?
                    <BookmarkPosts
                        user={user}                        
                    />                      
                    : null}                      
                </div>
            </div>
        )
    }
}    

export default Profile