import React, {Component} from "react";
import axios from "axios";
import {
    MDBInput,
    MDBBtn,
      
  } from 'mdb-react-ui-kit';

class CreatePost extends Component {
    constructor(props) {
        super(props)
              
              this.state= {
            data: {
                country: "",
                city: "",
                thingsToDo: "",
                whereToEat: "",
                whereToStay: "",
                tips: "",
                cost: "",
                image: "",
                adminId: this.props.admin.id
                
            },
            toggle: true
        }
    }

    toggleSubmit= () =>{
       
        this.setState({toggle:!this.state.toggle})
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
            axios.post("http://localhost:3001/post/newpost", this.state.data)
            .then(resp => {
                this.toggleSubmit()
                this.props.toggleView()
            })
            .catch(err => {
                console.log(err)
            })
        }

        render(props) {
            return (
         <div className='d-flex flex-column justify-content-center' style={{marginTop: '50px', textAlign: 'center', alignContent: 'center' }}>
            { this.state.toggle ? 
            <div>
                <h2 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold"}}>Create Post</h2>
                <form onSubmit={this.handleSubmit} style ={{margin: '50px 0px 0px 790px', width: "50rem"}}>

                    <MDBInput onChange={this.handleChange} label='Country' id='typeText' type='text' name='country' />
                    <br></br>

                    <MDBInput onChange={this.handleChange} label='City' id='typeText' type='text' name='city' />
                    <br></br>

                    <MDBInput onChange={this.handleChange} label='Things To Do' id='textAreaExample' textarea rows={3} type='text' name='thingsToDo' />
                    <br></br>

                    <MDBInput onChange={this.handleChange} label='Where To Eat' id='textAreaExample' textarea rows={3} type='text' name='whereToEat' />
                    <br></br>

		            <MDBInput onChange={this.handleChange} label='Where To Stay' id='textAreaExample' textarea rows={3} type='text' name='whereToStay' />
                    <br></br>

		            <MDBInput onChange={this.handleChange} label='Travelers Tips' id='textAreaExample' textarea rows={4} type='text' name='tips' />
                    <br></br>

		            <MDBInput onChange={this.handleChange} label='Budget' id='typeText' type='text' name='cost' />
                    <br></br>
                                            
                    <MDBInput onChange={this.handleChange} label='Photo #1' id='typeURL' type='url' name='image1' />
                    <br></br>

                    <MDBInput onChange={this.handleChange} label='Photo #2' id='typeURL' type='url' name='image2' />
                    <br></br> 

		            <MDBInput onChange={this.handleChange} label='Photo #3' id='typeURL' type='url' name='image3' />
                    <br></br> 
                    <input onChange={this.handleChange} type='hidden' name="adminId" value={this.props.admin.id} placeholder={this.props.admin.id}/>
                    <div style={{padding: "50px"}}>   
                    <MDBBtn className='mx-2' color='info'>Submit Post</MDBBtn>            
                    </div> 
                </form>
            </div>
            : null}
        </div>
     )
 }
}    

export default CreatePost;