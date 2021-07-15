import React, {Component} from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBInput,
    MDBBtn,
    MDBTabsLink   
  } from 'mdb-react-ui-kit';

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
                <div>
                <MDBNavbar expand='lg' light bgColor='light'>
                   <MDBNavbarNav className="d-flex justify-content-around">
                        <MDBNavbarItem>
                        <MDBNavbarLink style={{color: "blue"}} active aria-current='page' href="/login">
                            LOG IN
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
                <div  className='d-flex flex-column justify-content-center' style={{margin: '150px 1000px', textAlign: 'center', alignContent: 'center' }}>
                    <h2 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold"}}>ADMIN REGISTRATION</h2>
                    <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <MDBInput onChange={this.handleChange} label='Name' id='typeName' type='text' name='name' />
                        <br></br> 
                        <MDBInput onChange={this.handleChange} label='Username' id='typeUsername' type='text' name='username' />
                        <br></br> 
                        <MDBInput onChange={this.handleChange} label='Password' id='typePassword' type='password' name='password' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='About You' id='textAreaExample' textarea rows={4} type='text' name='about' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Profile Photo' id='typeURL' type='url' name='photo' />
                        <br></br> 
                        <MDBInput onChange={this.handleChange} label='Bucket List 1' id='typeText' type='text' name='bucketList1' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Bucket Photo 1' id='typeURL' type='url' name='bucketPhoto1' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Bucket List 2' id='typeText' type='text' name='bucketList2' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Bucket Photo 2' id='typeURL' type='url' name='bucketPhoto2' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Bucket List 3' id='typeText' type='text' name='bucketList3' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Bucket Photo 3' id='typeURL' type='url' name='bucketPhoto3' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Bucket List 4' id='typeText' type='text' name='bucketList4' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Bucket Photo 4' id='typeURL' type='url' name='bucketPhoto4' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Bucket List 5' id='typeText' type='text' name='bucketList5' />
                        <br></br>
                        <MDBInput onChange={this.handleChange} label='Bucket Photo 5' id='typeURL' type='url' name='bucketPhoto5' />
                        <br></br>
                        <MDBBtn outline rounded className='mx-2' color='info'>Submit Registration</MDBBtn>  
                    </form>
                </div>
            </div>      

        )
    }
}    
    
    
    export default AdminSignup
