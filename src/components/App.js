import React from 'react';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import Button from './Button';
import DisplayInfo from './DisplayInfo';

import './App.css';

// const GOOGLE_API_KEY = 'AIzaSyBTARIv5Ng1jwik_6IiZYjxT7OsiJvtp3Y';
const GOOGLE_API_KEY = 'AIzaSyCL8hbtDdyI1wWhrtyebSc2LaMlV1_lsko';

class App extends React.Component {
  state = {
    countryName: '',
    capital: '',
    region: '',
    subregion: '',
    timezone: ''
  };

  onButtonClicked = () => {
    const country = ['Sarajevo', 'Paris', 'London', 'Belgrade', 'tallinn'];
    var ctry = country[Math.floor(Math.random() * country.length)];
    fetch(`https://restcountries.eu/rest/v2/capital/${ctry}`)
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        this.setState({
          countryName: data[0].name,
          capital: data[0].capital,
          region: data[0].region,
          subregion: data[0].subregion,
          timezone: data[0].timezones[0],
          lat: data[0].latlng[0],
          lng: data[0].latlng[1]
        });
      })
      .catch(error => console.error(error));
  };

  render() {
    if (this.state.countryName === '') {
      return (
        <div>
          <Button onButtonClicked={this.onButtonClicked} />
        </div>
      );
    } else if (this.state.countryName !== '') {
      return (
        <div>
          <DisplayInfo
            country={this.state.countryName}
            capital={this.state.capital}
            region={this.state.region}
            subregion={this.state.subregion}
            timezone={this.state.timezone}
          />

          <Map
            google={this.props.google}
            style={{
              width: '80%',
              margin: '10%',
              height: '400px'
            }}
            initialCenter={{
              lat: 44.7722,
              lng: 17.191
            }}
            zoom={15}
            onClick={() => console.log('CLICKED ON MAP!')}
          >
            <Marker
              name={'Start position'}
              position={{ lat: 44.7722, lng: 17.191 }}
            />
            <Marker
              name={'End position'}
              position={{ lat: this.state.lat, lng: this.state.lng }}
            />
          </Map>
        </div>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(App);
