import React, {Component} from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import CreatePost from "../posts/CreatePost";
import AdminPosts from "../posts/AdminPosts";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBInput,
    MDBBtn,
    MDBIcon,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink
} from 'mdb-react-ui-kit';

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
            alert("User Updated")
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
                <MDBNavbar expand='lg' light bgColor='light'>
                   <MDBNavbarNav className="d-flex justify-content-around">
                        <MDBNavbarItem>
                        <MDBNavbarLink style={{color: "blue"}} active aria-current='page' href="/login">
                            HOME
                        </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <MDBNavbarLink style={{color: "green"}} active aria-current='page' href='/adminsignup'>
                            REGISTER ADMIN
                        </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <MDBNavbarLink style={{color: "purple"}} active aria-current='page' href='/about'>
                            ABOUT ME
                        </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <MDBNavbarLink style={{color: "orange"}} active aria-current='page' href='#'>
                            USER LIST
                        </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <MDBNavbarLink style={{color: "red"}} active aria-current='page' href='#'>
                            ADMIN LIST
                        </MDBNavbarLink> 
                        </MDBNavbarItem>
                    </MDBNavbarNav>   
                </MDBNavbar>
                <div className='d-flex flex-column justify-content-center' style={{marginTop: '50px', textAlign: 'center', alignContent: 'center' }}>
                <h1 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold", marginBottom: "50px"}}>Edit Admin Information</h1>
                <form style={{width: "50rem", margin: '30px 775px'}} onSubmit={this.handleSubmit}>
                    <MDBInput onChange={this.handleChange} label='Name' id='typeName' type='text' name='name' value={admin.name}/>
                    <br></br>
                    <MDBInput onChange={this.handleChange} label='Username' id='typeUsername' type='text' name='username' value={admin.username}/>
                    <br></br>
                    <MDBInput onChange={this.handleChange} label='Password' id='typePassword' type='password' name='password' value={admin.password}/>
                    <br></br>
                    <MDBInput onChange={this.handleChange} label='About You' id='textAreaExample' textarea rows={4} type='text' name='about' value={admin.about}/>
                    <br></br>          
                    <MDBInput onChange={this.handleChange} label='Profile Photo' id='typeURL' type='url' name='photo' value={admin.photo}/>
                    <br></br>
                    <MDBInput onChange={this.handleChange} label='Bucket # 1' id='typeText' type='text' name='bucketList1' value={admin.bucketList1}/>
                    <br></br>
                    <MDBInput onChange={this.handleChange} label='Bucket Photo 1' id='typeURL' type='url' name='bucketPhoto1' value={admin.bucketPhoto1}/>
                    <br></br> 
                    <MDBInput onChange={this.handleChange} label='Bucket # 2' id='typeText' type='text' name='bucketList2' value={admin.bucketList2}/>
                    <br></br>
                    <MDBInput onChange={this.handleChange} label='Bucket Photo 2' id='typeURL' type='url' name='bucketPhoto2' value={admin.bucketPhoto2}/>
                    <br></br> 
                    <MDBInput onChange={this.handleChange} label='Bucket # 3' id='typeText' type='text' name='bucketList3' value={admin.bucketList3}/>
                    <br></br>
                    <MDBInput onChange={this.handleChange} label='Bucket Photo 3' id='typeURL' type='url' name='bucketPhoto3' value={admin.bucketPhoto3}/>
                    <br></br> 
                    <MDBInput onChange={this.handleChange} label='Bucket # 4' id='typeText' type='text' name='bucketList4' value={admin.bucketList4}/>
                    <br></br>
                    <MDBInput onChange={this.handleChange} label='Bucket Photo 4' id='typeURL' type='url' name='bucketPhoto4' value={admin.bucketPhoto4}/>
                    <br></br> 
                    <MDBInput onChange={this.handleChange} label='Bucket # 5' id='typeText' type='text' name='bucketList5' value={admin.bucketList5}/>
                    <br></br>
                    <MDBInput onChange={this.handleChange} label='Bucket Photo 5' id='typeURL' type='url' name='bucketPhoto5' value={admin.bucketPhoto5}/>
                    <br></br>
                    <div className="d-flex justify-content-evenly" style={{padding: "50px"}}>
                    <MDBBtn style={{ backgroundColor: 'orange' }} onChange={this.handleChange}><MDBIcon className='me-2' fas icon='edit'/>Edit</MDBBtn>
                    <MDBBtn style={{ backgroundColor: 'orangered' }} onClick={this.handleDelete}><MDBIcon className='me-2' fas icon="trash-alt" />Delete</MDBBtn>
                    <Link to="/"><MDBBtn style={{ backgroundColor: 'green' }}><MDBIcon fas icon="sign-out-alt" />Log Out</MDBBtn></Link>
                    </div>
                </form>
                </div> 
                <MDBTabs justify className='mb-2'>
                <MDBTabsItem><MDBTabsLink style={{fontSize: "150%"}}onClick={this.toggleCreate}>Create Post</MDBTabsLink></MDBTabsItem>
                <MDBTabsItem><MDBTabsLink style={{fontSize: "150%"}} onClick={this.toggleView}>My Posts</MDBTabsLink></MDBTabsItem>
                </MDBTabs>
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
        )
    }
}    

export default AdminEdit;