import axios from 'axios'
import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { 
    MDBRow, 
    MDBCol,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBBtn, 
    MDBIcon
   
  } from 'mdb-react-ui-kit';


class AdminPosts extends Component {

    constructor (props) { 
        super(props)
        this.state = {
             posts: [],
                                      
            }             
    }

    

    componentDidMount =()=>{
             
        axios.get("http://localhost:3001/post/all")
        .then(resp => {
            
            this.setState ({
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

    
    render = (props)=>{
        
        return(
            <div>
                <h1 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold", margin: "50px 0px 100px", textAlign: 'center', alignContent: 'center'}}>My Travel Posts</h1>
                <div>
                {this.state.posts.map(post => {
                   return post.adminId === this.props.admin.id ?
                   
                        <ul>
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
                                <MDBCarousel showIndicators showControls>
                                    <MDBCarouselInner>
                                        <MDBCarouselItem itemId={0}>
                                        <MDBCarouselElement src={post.image1} alt='pic' />
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId={1}>
                                        <MDBCarouselElement src={post.image2} alt='pic' />
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId={2}>
                                        <MDBCarouselElement src={post.image3} alt='pic' />
                                        </MDBCarouselItem>
                                    </MDBCarouselInner>
                                </MDBCarousel>
                            </MDBCol>
                            </MDBRow>
                            <br></br>
                            <div className="d-flex justify-content-evenly" style={{padding: "50px"}}>
                            <Link to={`/postedit/${post.id}`}><MDBBtn style={{ backgroundColor: 'orange' }}>
                                <MDBIcon className='me-2' fas icon='edit' />Edit Post</MDBBtn></Link>
                            <Link to={`/postdelete/${post.id}`}><MDBBtn style={{ backgroundColor: 'orangered' }}>
                                <MDBIcon className='me-2' fas icon="trash-alt" />Delete Post</MDBBtn></Link>
                            </div>                               
                            </ul>
                    : null 
                })}
                </div>
            </div>
            ) 
        }           

    }

export default AdminPosts;
