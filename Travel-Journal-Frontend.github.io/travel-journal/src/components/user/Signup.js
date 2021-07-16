import React, {Component} from "react"
import axios from "axios"
import { Link, Route } from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBInput,
    MDBBtn,
    MDBTabsLink   
  } from 'mdb-react-ui-kit';

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
            alert("Not an email format. Try Again")
        })
    }

    render() {
        
        return (
            <div>
                <div>
                    <MDBNavbar expand='lg' light bgColor='light'>
                        <MDBNavbarNav className="d-flex justify-content-around">
                            <MDBNavbarItem>
                            <MDBNavbarLink style={{color: "blue"}} active aria-current='page' href="/">
                                HOME
                            </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                            <MDBNavbarLink style={{color: "green"}} active aria-current='page' href='/login'>
                                LOG IN
                            </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                            <MDBNavbarLink style={{color: "purple"}} active aria-current='page' href='/about'>
                                ABOUT ME
                            </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                            <MDBNavbarLink style={{color: "orange"}} active aria-current='page' href='/search'>
                                COUNTRY <i class="fas fa-search"></i>
                            </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                            <MDBTabsLink style={{color: "red"}} active aria-current='page' target="_blank" href='https://travel.state.gov/content/travel.html'>
                                TRAVEL.GOV
                            </MDBTabsLink> 
                            </MDBNavbarItem>
                        </MDBNavbarNav> 
                    </MDBNavbar>
                </div>    
                <div className='d-flex flex-column justify-content-center' style={{margin: '150px 1000px', textAlign: 'center', alignContent: 'center' }}>
                    <h2 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold"}}>SIGN UP</h2>
                    <br></br>
                    <form style={{width: "30rem", margin: '30px -40px'}} onSubmit={this.handleSubmit}>
                        <MDBInput onChange={this.handleChange} label='Name' id='typeName' type='text' name='name' />
                        <br></br> 
                        <MDBInput onChange={this.handleChange} label='Email' id='typeEmail' type='email' name='email' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Password' id='typePassword' type='password' name='password' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Your Travel Interests' id='textAreaExample' textarea rows={4} type='text' name='interest' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Profile Photo' id='typeURL' type='url' name='photo' />
                        <br></br> 
                        <MDBBtn outline rounded color='success'>Submit Registration</MDBBtn>         
                    </form>
                </div>
            </div> 
        )
    }
}    

export default Signup