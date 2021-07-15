import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Country from "./Country";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBInput,
  MDBTabsLink

} from 'mdb-react-ui-kit';

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
                          <MDBTabsLink style={{color: "red"}} active aria-current='page' target="_blank" href='https://travel.state.gov/content/travel.html'>
                            TRAVEL.GOV
                          </MDBTabsLink>                        
                        </MDBNavbarItem>
                    </MDBNavbarNav>   
                </MDBNavbar>
                </div >
                <div>
                <form onSubmit={this.handleSubmit}>
                      <div className="d-flex justify-content-center" style={{padding: "100px 0px 0px"}}>
                        <h1 style={{color: "rgb(65, 59, 59)", fontFamily: "Garamond, serif", fontSize: "300%", fontWeight: "bold"}}>Country Information</h1>
                      </div>  
                        <br></br>
                        <br></br>
                      <div className="d-flex flex-row justify-content-center">  
                        <MDBInput
                            label='Country'
                            id='typeText'
                            type="text" 
                            name="country" 
                            placeholder="Enter Country Name" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                        />
                        <MDBBtn><i class="fas fa-search"></i></MDBBtn>
                      </div>
                </form>
                </div>
                <div>
                {this.state.ready ? 
                    <Country 
                    country={this.state.country}/>
                    :
                    null      
                    }                                        
                </div>
            </div>

            )
        }   
}
        
        
export default Search
            