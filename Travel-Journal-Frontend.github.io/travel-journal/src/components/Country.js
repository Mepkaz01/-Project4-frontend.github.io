import React from 'react';
import { MDBCol } from 'mdb-react-ui-kit';

function Country(props) {
  const country= props.country  
  return (
      <div>
        <div className='p-5 text-center bg-light' style={{fontFamily: "Garamond, serif"}}>
          <div style={{fontSize: "300%", fontWeight: "bold"}}>Country: {country.name}</div>
          <div style={{fontSize: "200%"}}>SubRegion: {country.subregion}</div>
          <div style={{fontSize: "200%"}}>Region: {country.region}</div>
        </div>        
        <div style ={{marginTop: "50px"}}className='d-flex flex-row-reverse justify-content-evenly'>
          <div style={{fontSize: "200%", fontFamily: "Garamond, serif"}}>
            <p><strong>Alternate Spellings:</strong> {country.altSpellings.join(', ')}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Demonym:</strong> {country.demonym}</p>
            <p><strong>Currency:</strong> {country.currencies.map(currency => (`${currency.name} (${currency.code})`))}</p>
            <p><strong>Languages:</strong> {country.languages.map(language => language.name).join(', ')}</p>
            <p><strong>Bordering Countries:</strong> {country.borders.join(', ')}</p>
            <p><strong>Population:</strong> {parseInt(country.population).toLocaleString()}</p>
          </div>
          <MDBCol lg='4' md='12' className='mb-4'>
            <img className='img-fluid rounded' src={country.flag} alt='flag' width="500" height="400" />  
          </MDBCol>
        </div>
      </div>
  )
}  


export default Country