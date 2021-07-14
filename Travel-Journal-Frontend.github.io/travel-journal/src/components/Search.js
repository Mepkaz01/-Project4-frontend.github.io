import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Country from "./Country";

class Search extends Component {
    constructor(){
        super();
        this.state = {
          country: [],
          value:'',
          ready: false
    
        }
      }  
    
      fetchData = (inputValue) => {
        console.log(inputValue)
        axios.get(`https://restcountries.eu/rest/v2/name/${inputValue}`)
        .then( response => {
          this.setState({
            country: response.data[0],
            ready: true
          })
          
        })
      }
    
      handleChange = (event) => {
        this.setState({
          value: event.target.value
        });
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.fetchData(this.state.value)
        
      }
    
    render = () => {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <h1>Look Up Country Information</h1>
                        <input 
                            type="text" 
                            name="country" 
                            placeholder="Country Name" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="submit"/>
                </form>
                <div>
                {this.state.ready ? 
                    <Country 
                    country={this.state.country}/>
                    :
                    <div>Enter Country Name</div>      
                    }                                        
                </div>
            </div>

            )
        }   
}
        
        
export default Search
            