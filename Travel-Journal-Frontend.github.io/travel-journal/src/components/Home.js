import React from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
 
} from 'mdb-react-ui-kit';
import { Link, Route } from "react-router-dom";
import Map from "./Map";
import Footer from './Footer';

function App() {
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
                        <MDBNavbarLink style={{color: "red"}} active aria-current='page' href='/posts'>
                            TRAVEL POSTS
                        </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>    
                    {/* <form className='d-flex input-group w-auto'>
                        <input style={{right: "50px"}}type='search' className='form-control' placeholder='Country Name' aria-label='Search' /> */}
                        <Link to="/search"><MDBBtn outline style={{top: "1110px", right: "1080px", padding: "2px"}}>Lookup Country <i class="fas fa-search"></i></MDBBtn></Link>
                    {/* </form> */}
                </MDBNavbar>
                </div>
                <div className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('https://www.kindpng.com/picc/m/115-1152319_zoho-invoice-for-travel-tourism-industry-travel-banner.png')", height: 130 }}>
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}></div>
                    <div className='d-flex justify-content-center align-items-center h-200'></div>
                    <h1 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "400%", fontWeight: "bold"}} >PATTY'S TRAVEL JOURNAL</h1>
                </div>        
                <div className="content">
                    <Map/>
                </div>
                <div style={{position: "absolute", bottom: "0", width: "100%", height: "2.5rem"}}> 
                    <Footer/>
                </div>  
            </div>    
            
        );
    }

export default App;    


