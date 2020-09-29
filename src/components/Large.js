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
                <div className="tab-left-container">
                  <p className="rank">1</p>
                  <p><img src="data:image/png;base64,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" alt="company pic"/></p>
                  <p>Goosehead Insurance</p>
                </div>
                <div className="tab-right-container">
                  <div>
                    <p>Westlake, Texas</p>
                  </div>
                  <div>
                    <p>General Insurance</p>
                  </div>
                </div>
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
                <div className="tab-left-container">
                  <p className="rank">1</p>
                  <p><img src="data:image/png;base64,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" alt="company pic" /></p>
                  <p>Goosehead Insurance</p>
                </div>
                <div className="tab-right-container">
                  <div>
                    <p>Westlake, Texas</p>
                  </div>
                  <div>
                    <p>General Insurance</p>
                  </div>
                </div>
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
            <input type="radio" id="rd3" name="rd" />
            <label className="tab-label" for="rd3">
              <div className="company-name-container">
                <div className="tab-left-container">
                  <p className="rank">1</p>
                  <p><img src="data:image/png;base64,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" alt="company pic" /></p>
                  <p>Goosehead Insurance</p>
                </div>
                <div className="tab-right-container">
                  <div>
                    <p>Westlake, Texas</p>
                  </div>
                  <div>
                    <p>General Insurance</p>
                  </div>
                </div>
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
            <input type="radio" id="rd4" name="rd" />
            <label className="tab-label" for="rd4">
              <div className="company-name-container">
                <div className="tab-left-container">
                  <p className="rank">1</p>
                  <p><img src="data:image/png;base64,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" alt="company pic" /></p>
                  <p>Goosehead Insurance</p>
                </div>
                <div className="tab-right-container">
                  <div>
                    <p>Westlake, Texas</p>
                  </div>
                  <div>
                    <p>General Insurance</p>
                  </div>
                </div>
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
        </div>
      </div>
    )
  }
}

