import React, {Component} from "react";
import axios from "axios";
import {
    MDBInput,
    MDBBtn,
      
  } from 'mdb-react-ui-kit';

class ItemEdit extends Component {
    constructor() {
        super()
        this.state= {
            data: {
                country: "",
                city: "",
                thingsToDo: "",
                whereToEat: "",
                whereToStay: "",
                tips: "",
                cost: "",
                image: ""
            }
        }
    }

componentDidMount = () => {
        axios.get(`http://localhost:3001/post/${this.props.match.params.indx}`)
        .then(resp => {
            this.setState({
                data: resp.data
                
            })   
            console.log(resp) 
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
        axios.put(`http://localhost:3001/post/${this.props.match.params.indx}`, this.state.data)
        .then(resp => {
            this.props.history.push(`/adminedit/${this.state.data.adminId}`)
            
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        const post=this.state.data
        return (
            <div className='d-flex flex-column justify-content-center' style={{marginTop: '100px', textAlign: 'center', alignContent: 'center' }}>
                <h2 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold"}}>Edit Post</h2>
               
                <form onSubmit={this.handleSubmit} style ={{margin: '50px 0px 0px 800px', width: "50rem"}}>
                <MDBInput onChange={this.handleChange} label='Country' id='typeText' type='text' name='country' value={post.country}/>
                <br></br>

                <MDBInput onChange={this.handleChange} label='City' id='typeText' type='text' name='city' value={post.city}/>
                <br></br>

                <MDBInput onChange={this.handleChange} label='Things To Do' id='textAreaExample' textarea rows={3} type='text' name='thingsToDo' value={post.thingsToDo}/>
                <br></br>

                <MDBInput onChange={this.handleChange} label='Where To Eat' id='textAreaExample' textarea rows={3} type='text' name='whereToEat' value={post.whereToEat}/>
                <br></br>

		        <MDBInput onChange={this.handleChange} label='Where To Stay' id='textAreaExample' textarea rows={3} type='text' name='whereToStay' value={post.whereToStay}/>
                <br></br>

		        <MDBInput onChange={this.handleChange} label='Travelers Tips' id='textAreaExample' textarea rows={4} type='text' name='tips' value={post.tips}/>
                <br></br>

		        <MDBInput onChange={this.handleChange} label='Budget' id='typeText' type='text' name='cost' value={post.cost}/>
                <br></br>
                                            
                <MDBInput onChange={this.handleChange} label='Photo #1' id='typeURL' type='url' name='image1' value={post.image1}/>
                <br></br>

                <MDBInput onChange={this.handleChange} label='Photo #2' id='typeURL' type='url' name='image2' value={post.image2}/>
                <br></br> 

		        <MDBInput onChange={this.handleChange} label='Photo #3' id='typeURL' type='url' name='image3' value={post.image3}/>
                <br></br> 

                <div style={{padding: "50px"}}>    
                <MDBBtn className='mx-2' color='secondary'>Confirm Changes</MDBBtn> 
                </div>          
                </form>
            </div>
        )
    }
}    

export default ItemEdit