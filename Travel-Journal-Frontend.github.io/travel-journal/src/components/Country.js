import React from 'react';

function Country(props) {
  const country= props.country  
  return (
      <div>
        <h2>Country: {country.name}</h2>
        <h3>SubRegion: {country.subregion}</h3>
        <h3>Continent: {country.region}</h3>
                
        <div>
        <p>Alternate Spellings: {country.altSpellings.join(', ')}</p>
        <p>Capital: {country.capital}</p>
        <p>Demonym: {country.demonym}</p>
        <p>Currency: {country.currencies.map(currency => (`${currency.name} (${currency.code})`))}</p>
        <p>Languages: {country.languages.map(language => language.name).join(', ')}</p>
        <p>Bordering Countries: {country.borders.join(', ')}</p>
        <p>Population: {parseInt(country.population).toLocaleString()}</p>
        <img src={country.flag} alt='flag'/>  
        
        </div>
      </div>
  )
}   



export default Country