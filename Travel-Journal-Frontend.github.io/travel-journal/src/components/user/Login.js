import React, {Component} from "react"
import axios from "axios"
import { Link, Route } from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBInput,
    MDBBtn   
  } from 'mdb-react-ui-kit';

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
                <div>
                    <MDBNavbar expand='lg' light bgColor='light'>
                        <MDBNavbarNav className="d-flex justify-content-around">
                            <MDBNavbarItem>
                            <MDBNavbarLink style={{color: "blue"}} active aria-current='page' href="/">
                                HOME
                            </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                            <MDBNavbarLink style={{color: "green"}} active aria-current='page' href='/signup'>
                                REGISTER
                            </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                            <MDBNavbarLink style={{color: "purple"}} active aria-current='page' href='/about'>
                                ABOUT ME
                            </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                            <MDBNavbarLink style={{color: "red"}} active aria-current='page' href='/posts'>
                                TRAVEL POSTS
                            </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav> 
                    </MDBNavbar>
                </div>    
                <div className='d-flex flex-column justify-content-center' style={{margin: '150px 1000px', textAlign: 'center', alignContent: 'center' }}>
                    <h1 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold"}}>LOG IN</h1>
                    <br></br>
                    <form style={{width: "23rem"}} onSubmit={this.handleSubmit}>
                        <MDBInput onChange={this.handleChange} label='Email' id='typeEmail' type='email' name='email' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Password' id='typePassword' type='password' name='password' />
                        <br></br>
                        <MDBBtn style={{margin: '400px 1070px', textAlign: 'center', alignContent: 'center' }}>Log In</MDBBtn>
                    </form>    
                </div>
            </div>
        )
    }
}    


export default Login


                