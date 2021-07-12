import React, {Component} from "react"
import { Link } from "react-router-dom";

const ProfileEdit = (props) => {
    return (
        <div>
              
            <h1>Edit Profile Information</h1>
            <form onSubmit={props.handleSubmit}>
                <div><label>Name: </label><input onChange={props.handleChange} type="text" name="name" value={props.user.name} placeholder="name"/></div>
                <div><label>Email: </label><input onChange={props.handleChange} type="text" name="email" value={props.user.email} placeholder="email"/></div>
                <div><label>Password: </label><input onChange={props.handleChange} type="password" name="password" value={props.user.password} placeholder="password"/></div>
                <div><label>Interest: </label><input onChange={props.handleChange} type="text" name="interest" value={props.user.interest} placeholder="interest"/></div>
                <div><label>Photo: </label><input onChange={props.handleChange} type="img" name="photo" value={props.user.photo} placeholder="photo"/></div>
                              
                <button onChange={props.handleChange}>Edit</button>
                <button onClick={props.handleDelete}>Delete</button>
                <Link to="/"><button>Log Out</button></Link>
            </form>          
          
        </div>
    )
}

export default ProfileEdit