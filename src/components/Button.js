import React from 'react';
import './App.css';

class Button extends React.Component {
  render() {
    return (
      <div className="btn" onClick={this.props.onButtonClicked}>
        <div className="btn ui animated fade button">
          <div className="visible content">Find Location</div>
          <div className="hidden content">
            <i id="marker" className="map marker icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Button;
