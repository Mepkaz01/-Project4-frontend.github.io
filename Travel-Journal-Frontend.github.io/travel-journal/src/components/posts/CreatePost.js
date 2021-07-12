import React, {Component} from "react"
import axios from "axios"

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
         <div>
            { this.state.toggle ? 
            <div>
                <h2>Create Post</h2>
                <form onSubmit={this.handleSubmit}>

                    <div><label>Country: </label><input onChange={this.handleChange} type="text" name="country" placeholder="country"/></div>
                    <div><label>City: </label><input onChange={this.handleChange} type="text" name="city" placeholder="city" /></div>
                    <div><label>Things To Do: </label><input onChange={this.handleChange} type="text" name="thingsToDo" placeholder="do" /></div>
                    <div><label>Where To Eat: </label><input onChange={this.handleChange} type="text" name="whereToEat" placeholder="eat"/> </div>                
                    <div><label>Where To Stay: </label><input onChange={this.handleChange} type="text" name="whereToStay" placeholder="stay"/></div>               
                    <div><label>Traveler's Tips: </label><input onChange={this.handleChange} type="text" name="tips" placeholder="tips" /></div>    
                    <div><label>Budget: </label><input onChange={this.handleChange} type="text" name="cost" placeholder="cost" /></div>
                    <div><label>Photo: </label><input onChange={this.handleChange} type="img" name="image" placeholder="image" /></div>
                    <input onChange={this.handleChange} type='hidden' name="adminId" value={this.props.admin.id} placeholder={this.props.admin.id}/>
                        
                    <input type="submit" value="Submit to Create Post"/>           
             
                </form>
            </div>
            : null}
        </div>
     )
 }
}    

export default CreatePost;