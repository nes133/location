import React from 'react';
import Distance from './Distance';

class DistanceInfo extends React.Component {
  onCallFunction() {
    fetch('http://www.distance24.org/route.json?stops=Hamburg|Berlin', {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(res => res.jsonp())
      .then(data => console.log(data));
  }
  render() {
    return <div>{this.onCallFunction()}</div>;
  }
}

export default DistanceInfo;
