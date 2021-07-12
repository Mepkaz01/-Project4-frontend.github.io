import React, {Component} from "react"
import axios from "axios"

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
            <div>
                <h2>Edit Post</h2>
               
                <form onSubmit={this.handleSubmit}>
                <div><label>Country: </label><input onChange={this.handleChange} type="text" name="country" value={post.country}placeholder="country"/></div>
                <div><label>City: </label><input onChange={this.handleChange} type="text" name="city" value={ post.city} placeholder="city"/></div>
                <div><label>Things To Do: </label><input onChange={this.handleChange} type="text" name="thingsToDo" value={post.thingsToDo} placeholder="do"/></div>
                <div><label>Where To Eat: </label><input onChange={this.handleChange} type="text" name="whereToEat" value={post.whereToEat} placeholder="eat"/> </div>                
                <div><label>Where To Stay: </label><input onChange={this.handleChange} type="text" name="whereToStay" value={post.whereToStay}  placeholder="stay"/></div>               
                <div><label>Traveler's Tips: </label><input onChange={this.handleChange} type="text" name="tips" value={post.tips}  placeholder="tips"/></div>               
                <div><label>Budget: </label><input onChange={this.handleChange} type="text" name="cost" value={post.cost}  placeholder="cost"/></div>               
                <div><label>Photo: </label><input onChange={this.handleChange} type="img" name="image" value={post.image} placeholder="image"/></div>              
                      
                <input type="submit" value="Confirm Changes"/>           
                </form>
            </div>
        )
    }
}    

export default ItemEdit