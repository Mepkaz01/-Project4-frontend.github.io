import React, {Component} from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import CreatePost from "../posts/CreatePost";
import AdminPosts from "../posts/AdminPosts";

class AdminEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "",
                username: "",
                password: "",
                about: "",
                photo: "",
                bucketList1: "",
                bucketPhoto1: "",
                bucketList2: "",
                bucketPhoto2: "",
                bucketList3: "",
                bucketPhoto3: "",
                bucketList4: "",
                bucketPhoto4: "",
                bucketList5: "",
                bucketPhoto5: "",
                id: 0
            },

            toggleCreate:false,
            toggleView:false
            
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:3001/admin/profile/${this.props.match.params.id}`)
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
        axios.put(`http://localhost:3001/admin/profile/${this.props.match.params.id}`, this.state.data)
        .then(resp => {
            console.log("User Updated")
        })
    }

    handleDelete = (event) => {
        event.preventDefault()

        axios.delete(`http://localhost:3001/admin/profile/${this.props.match.params.id}`)
        .then(resp => {
            this.props.history.push('/')
        })       
        
    }

    toggleCreate= () =>{
        
        this.setState({toggleCreate:!this.state.toggleCreate})
    }
    toggleView= () =>{
        
        this.setState({toggleView:!this.state.toggleView})
    }
    
    
    render() { 
        const admin = this.state.data   
        return (
            
            <div>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/adminsignup">Register Admin</Link></li>
                    <li><Link to="/users">User List</Link></li>
                    <li><Link to="/admins">Admin List</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    {/* <li><Link to="/posts">Travel Posts</Link></li> */}
                </nav>
                
                <h1>Edit Profile Information</h1>
                <form onSubmit={this.handleSubmit}>
                    <div><label>Name: </label><input onChange={this.handleChange} type="text" name="name" value={admin.name} placeholder="name"/></div>
                    <div><label>Username: </label><input onChange={this.handleChange} type="text" name="username" value={admin.username} placeholder="username"/></div>
                    <div><label>Password: </label><input onChange={this.handleChange} type="password" name="password" value={admin.password} placeholder="password"/></div>
                    <div><label>About: </label><input onChange={this.handleChange} type="text" name="about" value={admin.about} placeholder="about"/></div>
                    <div><label>Photo: </label><input onChange={this.handleChange} type="img" name="photo" value={admin.photo} placeholder="photo"/></div>
                    <div><label>Bucket List 1: </label><input onChange={this.handleChange} type="text" name="bucketList1" value={admin.bucketList1} placeholder="bucketlist1"/></div>
                    <div><label>Bucket Photo 1: </label><input onChange={this.handleChange} type="img" name="bucketPhoto1" value={admin.bucketPhoto1} placeholder="bucketphoto1"/></div>
                    <div><label>Bucket List 2: </label><input onChange={this.handleChange} type="text" name="bucketList2" value={admin.bucketList2} placeholder="bucketlist2"/></div>
                    <div><label>Bucket Photo 2: </label><input onChange={this.handleChange} type="img" name="bucketPhoto2" value={admin.bucketPhoto2} placeholder="bucketphoto2"/></div>
                    <div><label>Bucket List 3: </label><input onChange={this.handleChange} type="text" name="bucketList3" value={admin.bucketList3} placeholder="bucketlist3"/></div>
                    <div><label>Bucket Photo 3: </label><input onChange={this.handleChange} type="img" name="bucketPhoto3" value={admin.bucketPhoto3} placeholder="bucketphoto3"/></div>
                    <div><label>Bucket List 4: </label><input onChange={this.handleChange} type="text" name="bucketList4" value={admin.bucketList4} placeholder="bucketlist4"/></div>
                    <div><label>Bucket Photo 4: </label><input onChange={this.handleChange} type="img" name="bucketPhoto4" value={admin.bucketPhoto4} placeholder="bucketphoto4"/></div>
                    <div><label>Bucket List 5: </label><input onChange={this.handleChange} type="text" name="bucketList5" value={admin.bucketList5} placeholder="bucketlist5"/></div>
                    <div><label>Bucket Photo 5: </label><input onChange={this.handleChange} type="img" name="bucketPhoto5" value={admin.bucketPhoto5} placeholder="bucketphoto5"/></div>
                    
                    <button onChange={this.handleChange}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                    <Link to="/"><button>Log Out</button></Link>
                </form> 
                <div>
                    <button onClick={this.toggleCreate}>Create Post</button>
                    <button onClick={this.toggleView}>My Posts</button>
                    {this.state.toggleCreate ? 
                        <CreatePost 
                            admin={this.state.data}  
                            toggleView={this.toggleView} />
                    : null}
                    {this.state.toggleView ? 
                        <AdminPosts
                            admin={admin} 
                            toggleView={this.toggleView}/>
                    : null}
                </div>

            
            </div>
        )
    }
}    

export default AdminEdit;