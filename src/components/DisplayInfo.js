import React from 'react';
import Distance from './Distance';

const DisplayInfo = props => {
  return (
    <div>
      <h2 className="mainText">Location is away from Banja Luka: </h2>
      <Distance />
      <div className="infoBox">
        <table class="ui celled table">
          <thead>
            <tr>
              <th>Info</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Info">Country</td>
              <td data-label="Name">{props.country}</td>
            </tr>
            <tr>
              <td data-label="Info">Capital</td>
              <td data-label="Name">{props.capital}</td>
            </tr>
            <tr>
              <td data-label="Info">Region</td>
              <td data-label="Name">{props.region}</td>
            </tr>
            <tr>
              <td data-label="Info">Sub-region</td>
              <td data-label="Name">{props.subregion}</td>
            </tr>
            <tr>
              <td data-label="Info">Time-Zone</td>
              <td data-label="Name">{props.timezone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayInfo;
