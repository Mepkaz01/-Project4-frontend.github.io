import React, {Component} from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";

class AdminSignup extends Component {
    constructor() {
        super();
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
                bucketPhoto5: ""
               
            },
            
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
        axios.post("http://localhost:3001/auth/adminsignup", this.state.data)
        .then(resp => {
            this.props.history.push(`/adminedit/${resp.data.id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            
            <div>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    {/* <li><Link to="/posts">Travel Posts</Link></li> */}
                </nav>
                <div>
                    <h2>SIGN UP</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div><label>Name: </label><input onChange={this.handleChange} type="text" name="name" placeholder="name"/></div>
                        <div><label>Username: </label><input onChange={this.handleChange} type="text" name="username" placeholder="username"/></div>
                        <div><label>Password: </label><input onChange={this.handleChange} type="password" name="password" placeholder="password"/></div>
                        <div><label>About: </label><input onChange={this.handleChange} type="text" name="about" placeholder="about"/></div>
                        <div><label>Photo: </label><input onChange={this.handleChange} type="img" name="photo" placeholder="photo"/></div>
                        <div><label>Bucket List 1: </label><input onChange={this.handleChange} type="text" name="bucketList1" placeholder="bucketlist1"/></div>
                        <div><label>Bucket Photo 1: </label><input onChange={this.handleChange} type="img" name="bucketPhoto1" placeholder="bucketphoto1"/></div>
                        <div><label>Bucket List 2: </label><input onChange={this.handleChange} type="text" name="bucketList2" placeholder="bucketlist2"/></div>
                        <div><label>Bucket Photo 2: </label><input onChange={this.handleChange} type="img" name="bucketPhoto2" placeholder="bucketphoto2"/></div>
                        <div><label>Bucket List 3: </label><input onChange={this.handleChange} type="text" name="bucketList3" placeholder="bucketlist3"/></div>
                        <div><label>Bucket Photo 3: </label><input onChange={this.handleChange} type="img" name="bucketPhoto3" placeholder="bucketphoto3"/></div>
                        <div><label>Bucket List 4: </label><input onChange={this.handleChange} type="text" name="bucketList4" placeholder="bucketlist4"/></div>
                        <div><label>Bucket Photo 4: </label><input onChange={this.handleChange} type="img" name="bucketPhoto4" placeholder="bucketphoto4"/></div>
                        <div><label>Bucket List 5: </label><input onChange={this.handleChange} type="text" name="bucketList5" placeholder="bucketlist5"/></div>
                        <div><label>Bucket Photo 5: </label><input onChange={this.handleChange} type="img" name="bucketPhoto5" placeholder="bucketphoto5"/></div>
                        
                        <input type="submit" value="Sign Up"/> 
                    </form>
                </div>
            </div>      

        )
    }
}    
    
    
    export default AdminSignup
