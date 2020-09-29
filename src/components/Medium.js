import React, { Component } from 'react';
import "../styles/main.scss";

export default class Medium extends Component {
  render() {
    return (
      <div className="items-container">
        <div className="items-inner">
          <div className="tab">
            <input type="radio" id="rd1" name="rd" />
            <label className="tab-label" for="rd1">
              <div className="company-name-container">
                <div className="tab-left-container">
                  <div className="tab-company-rank">
                    <p>1</p>
                  </div>
                  <div className="tab-company-image">
                    <p><img src="data:image/png;base64,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" alt="company pic" /></p>
                  </div>
                  <div className="tab-company-name">
                    <p>Zurixx</p>
                  </div>
                </div>
                <div className="tab-right-container">
                  <div>
                    <p>Cottonwood Heights, Utah</p>
                  </div>
                  <div className="tab-right-container">
                    <p>Financial Education</p>
                  </div>
                </div>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>Zurixx develops, promotes, sells and fulfills financial education programs throughout the United States and Canada. Its multi-phase educational process equips students with the tools, knowledge and resources they need to be financially successful. Zurixx partners with internationally-known celebrities from ABC, A&E, HGTV, and DIY Networks.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/bg1.bdfdb54d.png" alt="goosehead insurance" />
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
                      <li>Cottonwood Heights, Utah</li>
                      <li>2012</li>
                      <li>Financial Education</li>
                      <li>81</li>
                      <li>
                        <a href="http://www.zurixx.com" target="_blank">
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
                  <div className="tab-company-rank">
                    <p>2</p>
                  </div>
                  <div className="tab-company-image">
                    <p><img src="data:image/png;base64,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" alt="company pic" /></p>
                  </div>
                  <div className="tab-company-name">
                    <p>Upside Travel</p>
                  </div>
                </div>
                <div className="tab-right-container">
                  <div>
                    <p>Washington, D.C.</p>
                  </div>
                  <div>
                    <p>Travel / Vacation</p>
                  </div>
                </div>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>Upside is an online travel service exclusively for business travelers.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/bg2.711d74b6.png" alt="goosehead insurance" />
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
                      <li>Washington, D.C.</li>
                      <li>2015</li>
                      <li>Travel / Vacation</li>
                      <li>87</li>
                      <li>
                        <a href="http://www.upside.com" target="_blank">
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
                  <div className="tab-company-rank">
                    <p>3</p>
                  </div>
                  <div className="tab-company-image">
                    <p><img src="data:image/png;base64,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" alt="company pic" /></p>
                  </div>
                  <div className="tab-company-name">
                    <p>8z Real Estate</p>
                  </div>
                </div>
                <div className="tab-right-container">
                  <div className="tab-company-location">
                    <p>Boulder, Colo.</p>
                  </div>
                  <div className="tab-company-sector">
                    <p>Agents / Brokers</p>
                  </div>
                </div>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>With 8z, you will have all the information you need about the market, pricing, and the buying or selling process. You'll know what we are doing, why we are doing it, and what to expect.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/bg3.326bced9.png" alt="goosehead insurance" />
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
                      <li>Boulder, Colo.</li>
                      <li>2009</li>
                      <li>Agents / Brokers</li>
                      <li>159</li>
                      <li>
                        <a href="https://8z.com" target="_blank">
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
                  <div className="tab-company-rank">
                    <p>4</p>
                  </div>
                  <div className="tab-company-image">
                    <p><img src="data:image/png;base64,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" alt="company pic" /></p>
                  </div>
                  <div className="tab-company-name">
                    <p>CBH Homes</p>
                  </div>
                </div>
                <div className="tab-right-container">
                  <div clas>
                    <p>Meridian, Idaho</p>
                  </div>
                  <div>
                    <p>New Home Construction</p>
                  </div>
                </div>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>CBH Homes is a home builder and real-estate firm.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/bg4.bd05b149.png" alt="goosehead insurance" />
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
                      <li>Meridian, Idaho</li>
                      <li>1992</li>
                      <li>New Home Construction</li>
                      <li>89</li>
                      <li>
                        <a href="https://cbhhomes.com/" target="_blank">
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

