import React, {Component} from "react"
import { Link } from "react-router-dom";
import {
    MDBInput,
    MDBBtn,
    MDBIcon,
      
  } from 'mdb-react-ui-kit';

const ProfileEdit = (props) => {
    return (
        <div className='d-flex flex-column justify-content-center' style={{marginTop: '30px', textAlign: 'center', alignContent: 'center' }}>
              
            <h1 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold"}}>Edit Profile Information</h1>
            <form style ={{margin: '50px 0px 0px 960px', width: "30rem"}} onSubmit={props.handleSubmit}>
                <MDBInput onChange={props.handleChange} label='Name' id='typeName' type='text' name='name' value={props.user.name}/>
                <br></br> 
                <MDBInput onChange={props.handleChange} label='Email' id='typeEmail' type='email' name='email' value={props.user.email}/>
                <br></br>
                <MDBInput onChange={props.handleChange} label='Password' id='typePassword' type='password' name='password' value={props.user.password}/>
                <br></br>
                <MDBInput onChange={props.handleChange} label='Your Travel Interests' id='textAreaExample' textarea rows={4} type='text' name='interest' value={props.user.interest}/>
                <br></br>
                <MDBInput onChange={props.handleChange} label='Profile Photo' id='typeURL' type='url' name='photo' value={props.user.photo}/>
                <br></br> 
                <div className="d-flex justify-content-evenly" style={{padding: "50px"}}>
                    <MDBBtn style={{ backgroundColor: 'orange' }} onChange={props.handleChange}><MDBIcon className='me-2' fas icon='edit'/>Edit</MDBBtn>
                    <MDBBtn style={{ backgroundColor: 'orangered' }} onClick={props.handleDelete}><MDBIcon className='me-2' fas icon="trash-alt" />Delete</MDBBtn>
                    <Link to="/"><MDBBtn style={{ backgroundColor: 'green' }}><MDBIcon fas icon="sign-out-alt" />Log Out</MDBBtn></Link>
                </div>     

            </form>          
          
        </div>
    )
}

export default ProfileEdit