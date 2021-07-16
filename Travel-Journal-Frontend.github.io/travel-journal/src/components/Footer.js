import React from 'react';
import {
    MDBBtn,
    MDBIcon,
    MDBFooter
  } from 'mdb-react-ui-kit';
  

  

export default function Footer() {
  return (

    
    <div>
        <h5 className='d-flex justify-content-center'>CONNECT WITH ME</h5>  
        <div className='d-flex justify-content-center'>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
            <MDBIcon fab icon='facebook-f' size='lg' />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
            <MDBIcon fab icon='twitter' size='lg' />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
            <MDBIcon fab icon='google' size='lg' />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
            <MDBIcon fab icon='instagram' size='lg' />
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: 'black' }}>
            <MDBIcon fab icon="github" size='lg'/>
            </MDBBtn>
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





