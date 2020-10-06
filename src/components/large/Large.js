import React, { Component } from 'react';
import { LargeItems } from "./LargeItems";

export default class Large extends Component {
  render() {
    return (
      <div className="items-container">
        <div className="items-inner">
          <div className="tab">
            {LargeItems.map((item, index) => {
              return (
                <div className="items-grid-container" key={index}>
                  <div className="company-name-container">
                    <div className="tab-left-container">
                      <div className="tab-company-rank">
                        <p>{item.rank}</p>
                      </div>
                      <div className="tab-company-image">
                      </div>
                      <div className="tab-company-name">
                        <p>{item.title}</p>
                      </div>
                    </div>
                    <div className="tab-right-container">
                      <div className="tab-company-location">
                        <p>{item.location}.</p>
                      </div>
                      <div className="tab-company-sector">
                        <p>{item.sector}</p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-content">
                    <div className="tab-content-container">
                      <div className="tab-content-summary">
                        <p>{item.companyBio}</p>
                      </div>
                      <div className="tab-content-content">
                        <div className="tab-content-image">
                        </div>
                        <div className="tab-ul-content">
                          <lu className="tab-ul-first">
                            <li>Location</li>
                            <li>Yeat Founded</li>
                            <li>Sector</li>
                            <li># of U.S. Employees</li>
                            <li>Website</li>
                          </lu>
                          <lu className="tab-ul-second">
                            <li>{item.location}</li>
                            <li>{item.yearFounded}</li>
                            <li>{item.sector}</li>
                            <li>{item.numEmployee}</li>
                            <li>
                              <a href="https://scribemedia.com/" target="_blank">
                                {item.url}
                              </a>
                            </li>
                          </lu>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

