import axios from 'axios'
import React, { Component } from 'react'
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBTabsLink,
    MDBContainer, 
    MDBRow, 
    MDBCol,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,  
  } from 'mdb-react-ui-kit';

class About extends Component {

    constructor(props){ 
    super(props)
    this.state={
        admin: []
        
             
        
    };
}

componentDidMount =()=>{
    axios.get("http://localhost:3001/admin/all")
    .then(resp =>{
        this.setState({
            admin: resp.data
            }) 
        }
    )
}

render = () => {
    return (
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
                    <MDBTabsLink style={{color: "red"}} active aria-current='page' target="_blank" href='https://travel.state.gov/content/travel.html'>
                        TRAVEL.GOV
                    </MDBTabsLink> 
                    </MDBNavbarItem>
                </MDBNavbarNav> 
            </MDBNavbar>
            <div style={{padding: '100px'}}>
                <h1 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold", textAlign:"center"}}>About Me</h1>
            </div>
            
            {this.state.admin.map(admin =>
                <div> 
                    <MDBContainer>
                        <MDBRow around>
                            <MDBCol size='4' className='col-example'>
                                <img src={admin.photo} alt="user" width="400" height="300"/>
                            </MDBCol>

                            <MDBCol size='4' className='col-example' style={{fontSize:"130%"}}>
                                <p><strong>Hello my name is {admin.name} and Welcome to My Travel Journal!</strong></p>
                                <p><strong>{admin.about}</strong></p> 
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    
                    <br></br>
                    <br></br>
                    <h1 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold", textAlign:"center"}}>My Travel Bucket List</h1>
                    
                    <div style={{width: "40%", height: "auto", margin: "100px 700px 300px"}}>
                        <MDBCarousel showIndicators showControls fade>
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId={0}>
                            <MDBCarouselElement src={admin.bucketPhoto1} alt='...' />
                            <MDBCarouselCaption>
                                <h5>{admin.bucketList1}</h5>
                            </MDBCarouselCaption>
                            </MDBCarouselItem>

                            <MDBCarouselItem itemId={1}>
                            <MDBCarouselElement src={admin.bucketPhoto2} alt='...' />
                            <MDBCarouselCaption>
                                <h5>{admin.bucketList2}</h5>
                            </MDBCarouselCaption>
                            </MDBCarouselItem>

                            <MDBCarouselItem itemId={2}>
                            <MDBCarouselElement src={admin.bucketPhoto3} alt='...' />
                            <MDBCarouselCaption>
                                <h5>{admin.bucketList3}</h5>
                            </MDBCarouselCaption>
                            </MDBCarouselItem>

                        <MDBCarouselItem itemId={3}>
                            <MDBCarouselElement src={admin.bucketPhoto4} alt='...' />
                            <MDBCarouselCaption>
                                <h5>{admin.bucketList4}</h5>
                            </MDBCarouselCaption>
                            </MDBCarouselItem>

                        <MDBCarouselItem itemId={4}>
                            <MDBCarouselElement src={admin.bucketPhoto5} alt='...' />
                            <MDBCarouselCaption>
                                <h5>{admin.bucketList5}</h5>
                            </MDBCarouselCaption>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                        </MDBCarousel>
                    </div>
                </div>)}       
            
        </div>
        )
    } 
}    
   
export default About;