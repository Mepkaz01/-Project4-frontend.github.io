import axios from 'axios'
import React, { Component} from 'react'
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBTabsLink,
    MDBBtn,
    MDBRow, 
    MDBCol,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement
   
  } from 'mdb-react-ui-kit';


class Posts extends Component {

    constructor(props){ 
    super(props)
    this.state={
        posts: [],
        post: []
             
        
    };
}

componentDidMount =()=>{
    axios.get("http://localhost:3001/post/all")
    .then(resp =>{
        this.setState({
            posts: resp.data
            }) 
        }
    )
}

thousands_separators = (num) => 
        {
            let num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        }

filterPeru = () => {
    this.setState(
        {post: this.state.posts.filter( country => 
            country.country === "Peru")})
        
        }

filterTest = () => {
    this.setState(
        {post: this.state.posts.filter( country => 
            country.country === "test")})
                
        }        

render = (props)=>{
    
    return(
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
                </div >
                <div className='d-flex flex-column justify-content-center' style={{margin: '100px 0px 50px', textAlign: 'center', alignContent: 'center' }}>
                    <h1 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold"}}>My Travel Posts</h1>
                </div>    
                <div className='d-flex flex-row justify-content-center'>
                    
                        <MDBBtn outline onClick={this.filterPeru}>PERU</MDBBtn>
                        {/* <MDBBtn onClick={this.filterUSA} outline className='mx-2' color='secondary'>
                            USA
                        </MDBBtn>
                        <MDBBtn onClick={this.filterItaly} outline color='success'>ITALY</MDBBtn>
                        <MDBBtn outline className='mx-2' color='danger'>
                            SPAIN
                        </MDBBtn>
                        <MDBBtn onClick={this.filterMexico} outline color='warning'>PORTUGAL</MDBBtn>
                        <MDBBtn outline className='mx-2' color='info'>
                            MEXICO
                        </MDBBtn>
                        <MDBBtn onClick={this.filterDominicanRepublic} className='text-dark' color='light'>
                            DOMINICAN REPUBLIC
                        </MDBBtn> */}
                        <MDBBtn onClick={this.filterTest} className='mx-2' color='dark'>
                            TEST
                        </MDBBtn>
                    
                </div>
                <br></br>
                <br></br>                
                <div>

                {this.state.post.map(post =>
                
                <MDBRow around>
                <MDBCol style={{fontSize: "150%"}} size='4' className='col-example'>
                    <p><strong>Country:</strong> {post.country}</p>
                    <p><strong>City:</strong> {post.city}</p>
                    <p><strong>Things To Do:</strong> {post.thingsToDo}</p>
                    <p><strong>Where To Eat:</strong> {post.whereToEat}</p>
                    <p><strong>Where To Stay:</strong> {post.whereToStay}</p>
                    <p><strong>Traveler's Tips:</strong> {post.tips}</p>
                    <p><strong>Budget:</strong> {this.thousands_separators(post.cost)} USD</p>
                </MDBCol>

                <MDBCol size='4' className='col-example'>
                    {/* <img src={post.image} alt="pic" width="500" height="auto"/> */}
                    <MDBCarousel showIndicators showControls>
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId={0}>
                            <MDBCarouselElement src={post.image} alt='...' />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId={1}>
                            <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/042.jpg' alt='...' />
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBCol>
                </MDBRow>
            )}
            

        </div>
        </div>    

            
     
    )
}
}
export default Posts;