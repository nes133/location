import React from 'react';
//import DistanceInfo from './DistanceInfo';
//AIzaSyBTARIv5Ng1jwik_6IiZYjxT7OsiJvtp3Y

class Distance extends React.Component {
  //onCallFunction() {
  //  fetch('http://www.distance24.org/route.json?stops=Hamburg|Berlin', {
  //    method: 'post',
  //    headers: {
  //     'Content-type': 'application/json; charset=UTF-8'
  //    }
  //  })
  //   .then(res => res.json())
  //    .then(data => console.log('Hello'));
  // }
  render() {
    return (
      <div className="distanceText">
        <p>
          <i className="subway icon sbw" />
          346.6 km
          <i className="subway icon sbw1" />
        </p>
      </div>
    );
  }
}

export default Distance;
