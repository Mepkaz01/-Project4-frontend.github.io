import React from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBFooter
  } from 'mdb-react-ui-kit';
  

  

export default function Footer() {
  return (

    
    <div>
        <h5 className='d-flex justify-content-center'>CONNECT WITH ME</h5>  
        <div className='d-flex justify-content-center'>
         <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarNav className='d-flex flex-row'>
            <MDBNavbarItem className='me-3 me-lg-0'>
                <MDBNavbarLink href='#'>
                <MDBIcon far icon="envelope" />
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
                <MDBNavbarLink href='#'>
                <MDBIcon icon='camera-retro' />
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
                <MDBNavbarLink href='#'>
                <MDBIcon fab icon="facebook" />
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
                <MDBNavbarLink href='#'>
                <MDBIcon fab icon='twitter' />
                </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarNav>
        </MDBContainer>
        </MDBNavbar>    
        </div>
        <div>
        <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className='text-dark' href='#'>
            PattyTravelJournal.com
            </a>
        </div>
        </MDBFooter>
        </div>
    </div>    
  );
}





