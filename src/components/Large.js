import React, { Component } from 'react';
import "../styles/main.scss";

import LargeComp from "./LargeComp";

export default class Large extends Component {
  render() {
    return (
      <div className="items-container">
        <div className="items-inner">
          <div className="tab">
            <input type="radio" id="rd1" name="rd" />
            <label className="tab-label" for="rd1">
              <div className="company-name-container">
                <p>1</p>
                <p>LOGO</p>
                <p>Name</p>
                <p>Westlake, Texas</p>
                <p>General Insurance</p>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>Goosehead Insurance is an independent personal lines insurance agency. Goosehead represents more than 80 insurance companies that underwrite personal lines and small commercial lines risks, and its operations include a network of seven corporate sales offices and more than 400 franchise locations.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/bg1.b561c0ec.png" alt="goosehead insurance" />
                  </div>
                  <div className="tab-ul-content">
                    <lu>
                      <li>Location</li>
                      <li>Yeat Founded</li>
                      <li>Sector</li>
                      <li># of U.S. Employees</li>
                      <li>Website</li>
                    </lu>
                    <lu>
                      <li>Westlake, Texas</li>
                      <li>2013</li>
                      <li>General Insurance</li>
                      <li>341</li>
                      <li>
                        <a href="https://www.gooseheadinsurance.com/" target="_blank">
                          Visit ME!
                        </a>
                      </li>
                    </lu>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab">
            <input type="radio" id="rd2" name="rd" />
            <label className="tab-label" for="rd2">
                <div className="company-name-container">
                  <p>2</p>
                  <p>LOGO</p>
                  <p>Name</p>
                  <p>location</p>
                  <p>sector</p>
                </div>
            </label>
            <div className="tab-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
            </div>
          </div>
          <div className="tab">
            <input type="radio" id="rd3" name="rd" />
            <label className="tab-label" for="rd3">
                <div className="company-name-container">
                  <p>3</p>
                  <p>LOGO</p>
                  <p>Name</p>
                  <p>location</p>
                  <p>sector</p>
                </div>
            </label>
            <div className="tab-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
            </div>
          </div>
          <div className="tab">
            <input type="radio" id="rd4" name="rd" />
            <label className="tab-label" for="rd4">
              <div>
                <p>Item 4</p>
              </div>
            </label>
            <div className="tab-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

