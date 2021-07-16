import React, {Component} from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import ProfileEdit from "./ProfileEdit";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBTabsLink
      
  } from 'mdb-react-ui-kit';


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
            alert("User Updated")            
        })
    }

    handleDelete = (event) => {
        event.preventDefault()

        axios.delete(`http://localhost:3001/user/profile/${this.props.match.params.id}`)
        .then(resp => {
            this.props.history.push('/')
        })       
        
    }

  
      
    render() {
      
        const user = this.state.data
        return (
                <div>
                    <MDBNavbar expand='lg' light bgColor='light'>
                        <MDBNavbarNav className="d-flex justify-content-around">
                            <MDBNavbarItem>
                            <MDBNavbarLink style={{color: "blue"}} active aria-current='page' href="/">
                                LOG OUT
                            </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                            <MDBTabsLink style={{color: "green"}} active aria-current='page' target="_blank" href='https://travel.state.gov/content/travel.html'>
                                TRAVEL.GOV
                            </MDBTabsLink>
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
                            <MDBNavbarLink style={{color: "red"}} active aria-current='page' href='/posts'>
                                TRAVEL POSTS
                            </MDBNavbarLink>    
                            </MDBNavbarItem>
                        </MDBNavbarNav> 
                    </MDBNavbar>
                <div className='d-flex flex-column justify-content-center' style={{marginTop: '150px', textAlign: 'center', alignContent: 'center' }}>
                <h1 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold"}}>Welcome <span>{user.name}!</span></h1>
                </div>
                <div>
                  <ProfileEdit 
                    user={user}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                  />                   
                </div>                
            </div>
        )
    }
}    

export default Profile