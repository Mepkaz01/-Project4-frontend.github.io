import React, { Component } from 'react';
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import './Map.css';

const mapboxToken = 'pk.eyJ1IjoibWVwa2F6MDEiLCJhIjoiY2txdmZ5N2tvMGUzNzJybmwwZXY1bnA3ZCJ9.ns-UeSOFsFh6aDf0ZTDo9w'

class Map extends Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: '75vw',
        height: '70vh',
        latitude: 24.0361,
        longitude: -3.0438,
        zoom: 1.75
      },
      currMarker: null,
      markers: [],
      selectedMarker: null
    }
    this.handleViewportChange = this.handleViewportChange.bind(this)
    this.handleGeocoderViewportChange = this.handleGeocoderViewportChange.bind(this)
    this.handleResult = this.handleResult.bind(this)
    this.addMarker = this.addMarker.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleMarkerClick = this.handleMarkerClick.bind(this)
  }
  mapRef = React.createRef()

  handleViewportChange(viewport) {
    this.setState(prevState => ({
      viewport: {...prevState.viewport, ...viewport}
    }))
  }
  handleGeocoderViewportChange(viewport) {
    const geocoderDefaultOverrides = {transitionDuration: 1000}
    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    })
  }
  handleResult (result) {
    this.setState({
      currMarker: {
        name: result.result.place_name,
        latitude: result.result.center[1],
        longitude: result.result.center[0]
      }
    })
  }
  addMarker() {
    const {currMarker} = this.state
    this.setState(prevState => ({
      markers: [...prevState.markers, currMarker],
      currMarker: null
    }))
  }
  handleMarkerClick(marker) {
    this.setState({
      selectedMarker: marker
    })
  }
  handleClose = () => {
    this.setState({
      selectedMarker: null
    })
  }
  render() {
    const {viewport, markers, selectedMarker} = this.state
    return (
      <div className="content">  
      <ReactMapGl
        ref={this.mapRef}
        {...viewport}
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v10"
      >
        <button className="pin" onClick={this.addMarker}>Add <i class="fas fa-map-pin"></i></button>
        {markers.map((marker, idx) => {
          return (
            <Marker
              key={idx}
              latitude={marker.latitude}
              longitude={marker.longitude}
              onClick={() => this.handleMarkerClick(marker)}
              offsetTop={-30}
              offsetLeft={-15}
              
            >
              <img style={{height: "30px", width: "30px", display: "flex", justifyContent: "center"}} src="https://www.freepnglogos.com/uploads/pin-png/map-pin-icon-download-icons-20.png" alt="marker"/>
            </Marker>
          )
        })
        }
        <Geocoder
          onSelected={this.handleResult}
          mapRef={this.mapRef}
          placeholder="Search here!"
          onViewportChange={this.handleGeocoderViewportChange}
          onResult={this.handleResult}
          mapboxApiAccessToken={mapboxToken}        
          position="top-right"
        />
        {this.state.selectedMarker &&
          <Popup
          mapRef={this.mapRef}
          latitude={selectedMarker.latitude}
          longitude={selectedMarker.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={this.handleClose}
        >
            <h3>{selectedMarker.name}</h3>
        </Popup>
      }
      </ReactMapGl>
      </div>
    )
  }
}

export default Map;

