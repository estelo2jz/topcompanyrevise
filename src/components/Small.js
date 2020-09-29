import React, { Component } from 'react';
import "../styles/main.scss";

export default class Small extends Component {
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
                    <p>Scribe Media</p>
                  </div>
                </div>
                <div className="tab-right-container">
                  <div>
                    <p>Austin, Texas</p>
                  </div>
                  <div className="tab-right-container">
                    <p>Publishing</p>
                  </div>
                </div>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>Scribe helps professionals share their knowledge by turning their ideas into professionally published books and speeches. Its clients include Fortune 500 CEOs and executives, doctors, lawyers, financial advisors, high level consultants and entrepreneurs.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/scribe.38b62f37.png" alt="goosehead insurance" />
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
                      <li>Austin, Texas</li>
                      <li>2014</li>
                      <li>Publishing</li>
                      <li>35</li>
                      <li>
                        <a href="https://scribemedia.com/" target="_blank">
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
                    <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAklQTFRF/////v7+/f39/Pz8//7+6enp+/v7+vr66urq7Ozs7Ovsv76+ycjI9vb25+bm8vLy5OTk0dDR0dHRxMPDsrGx+Pj4+fn57Ovr1dTU5OPk9/f31tXV29vb7ezsWlZXY2Bhamho7e3ta2lpgX+Aamdofnt82NjXx8bGcm9wzMzMdnN0W1hZdHJyfXp74N/fnpycbWlrhYOEqaiojoyN39/fi4iJ4eHhxsXFnJqbnJqauLe3r62uyMfH5eXlt7W2k5GRqqiotrW1t7a2tLOzvr297+/vR0RFoaCgnZubUk9Q///+ZWNj6+rqZ2Rl0dDQbmxsp6am1tXWzczNTUpKq6mqend4dXNzXFlan52drKur8O/woqChaGVmpKKi4+LipaOjsK6vwL/AlJKTvry9wL+/4eDhqqmp6OjooJ+f4+PjtLKzmZeYpqSk7u7urKqq19fXubi4rKqrlpSUkpCQUlBQXFpa8PDwXVpbzczMb2xtenh4fnx9y8rKTEhJqKand3V1dXJzn56eraus0tHRW1hYu7q61NPTsrCxy8vLz87OxcTEpqWlm5mZqaen9PT0tbO0n52eqaeo1NTUraysV1NUYF1eYFxdXltbpKOjbGpqxsXGdHFyd3V2WFVWdnR0397fmJaWbGprgX5/rqys2NfYqKen0tLS3NzcqKamq6qqvLu8z8/P5OPjs7GyoJ6flZOU+vv7r66u3t3e4N/gycjJx8bHurm5ysnJ9/b35+bn8/Ly29raxcTF8/Pzvr2+tbOz9PP08fHxwcDAbyTh2gAAAfRJREFUWIXtkgdXE0EQx3+7Z3KJitgu0Sj2rhEVBSXGgsEuCHZBsCMqihV7xy723nvvvZdP5oaXJ0lenn4A5/fmze7N7Pz37mZAEARBEARBEASDijO0NquKGkpr47XV6E+y3imtSKhQ/xBPGVB/CyYVaZfb9ii8Wjc2T02aWqQ1s9Jd0LxFyzRo1doBH8rtNkfNir9NW7Nzoh+hA6aiXfsERUVGB+gYoFNnfxfo2q17D3r2oncf7L79gv3JHDBwEGQNZkg25Aw1f2BYbmg44RHokS49Cmt03pgIOl4wf+y48RPsiZO8k6dQUKinFlE8bfqMmTizZs+ZS0npvDLs8vkLFpbhLFq8BN9SKpZRuRz3ipVVq1hdDWvCce8YFVy7br3Nho1VNWzazJatbNu+Y+cunJrde9Kp2Ju5z/LV7j9wsIhDJYePYB89llVH+DiBUPjESU7VwunKBEH/GThbR/m58xfQwdKLIS5dpvgK9tXCa9e5cTN4S9m3IXKHu/fuP/Dohzx6zJOn+J5R8JwXLyPVeSqhLe5Xtu+1ibx5G73n3Xv48NH6ZJry+UvOV/j23bTAq1R+QHngx088qGycDNNMhcmr3F+pB0bXm0oxIQ0BrUlOphibmFTstNUw2Do22DFZFefjB9tKukUQBEEQBEEQ/lt+A/5BV3bdH8HtAAAAAElFTkSuQmCC" alt="company pic" /></p>
                  </div>
                  <div className="tab-company-name">
                    <p>Hughes Marino</p>
                  </div>
                </div>
                <div className="tab-right-container">
                  <div>
                    <p>San Diego, Calif.</p>
                  </div>
                  <div>
                    <p>Commercial Real Estate</p>
                  </div>
                </div>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>Hughes Marino is a real estate firm that exclusively represents tenants and buyers -- never landlords -- so it never has a conflict of interest. With offices across the nation, Hughes Marino has been helping companies lease, buy and build commercial space for over 25 years.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/hughes.b5c7b380.jpg" alt="goosehead insurance" />
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
                      <li>San Diego, Calif.</li>
                      <li>2011</li>
                      <li>Commercial Real Estate</li>
                      <li>74</li>
                      <li>
                        <a href="http://hughesmarino.com/" target="_blank">
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
                    <p>Maz</p>
                  </div>
                </div>
                <div className="tab-right-container">
                  <div className="tab-company-location">
                    <p>New York, N.Y.</p>
                  </div>
                  <div className="tab-company-sector">
                    <p>Content Logistics</p>
                  </div>
                </div>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>Maz has built a content distribution platform used by brands such as Forbes, Hearst and Bloomberg media. Its ability to increase audience reach, engagement and revenue performance is key to its partnership with hundreds of media brands.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/bg3.c185ac93.png" alt="goosehead insurance" />
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
                      <li>New York, N.Y.</li>
                      <li>2010</li>
                      <li>Content Logistics</li>
                      <li>37</li>
                      <li>
                        <a href="http://www.mazsystems.com" target="_blank">
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
                    <p>Choozle</p>
                  </div>
                </div>
                <div className="tab-right-container">
                  <div clas>
                    <p>Denver, Colo.</p>
                  </div>
                  <div>
                    <p>Advertising Technology and Software</p>
                  </div>
                </div>
              </div>
            </label>
            <div className="tab-content">
              <div className="tab-content-container">
                <div className="tab-content-summary">
                  <p>Choozle provides digital advertising software that leverages detailed consumer data to power programmatic advertising campaigns across display, video, mobile and other mediums - all from a single, intuitive interface.</p>
                </div>
                <div className="tab-content-content">
                  <div className="tab-content-image">
                    <img src="https://companycultures.netlify.app/static/media/bg4.460a5f9c.png" alt="goosehead insurance" />
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
                      <li>Denver, Colo.</li>
                      <li>20112</li>
                      <li>Advertising Technology and Software</li>
                      <li>60</li>
                      <li>
                        <a href="https://choozle.com" target="_blank">
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

