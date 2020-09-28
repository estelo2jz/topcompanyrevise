import React, { Component } from 'react';

export default class Companies extends Component {
  render() {
    return (
      <div className="company-container">
        <div className="company-inner-container">
          <div className="company-inner">
            <h4>BY COMPANY SIZE:</h4>
          </div>
          <div className="company-size-container">
            <ul>
              <li>SMALL</li>
              <li>MEDIUM</li>
              <li>LARGE</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
