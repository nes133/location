import React from 'react';
import Button from './Button';
import DisplayInfo from './DisplayInfo';
import './App.css';

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
      .then(data =>
        this.setState({
          countryName: data[0].name,
          capital: data[0].capital,
          region: data[0].region,
          subregion: data[0].subregion,
          timezone: data[0].timezones[0]
        })
      );
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
        </div>
      );
    }
  }
}

export default App;
