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
              <SmallNav
                rank="1"
                companylogo="LOGO"
                companyname="Scribe Media"
                companylocation="Austin, Texas"
                companysector="Commercial Real Estate"
              />
            </label>
            <Smallcontent
              summary="Scribe helps professionals share their knowledge by turning their ideas into professionally published books and speeches. Its clients include Fortune 500 CEOs and executives, doctors, lawyers, financial advisors, high level consultants and entrepreneurs."
              location="Austin. Texas"
              founded="2014"
              sector="Publishing"
              number="35"
              website="https://scribemedia.com/"
              imagesrc="https://companycultures.netlify.app/static/media/scribe.38b62f37.png"
            />
          </div>
          <div className="tab">
            <input type="radio" id="rd2" name="rd" />
            <label className="tab-label" for="rd2">
              <SmallNav 
                rank="2"
                companylogo="LOGO"
                companyname="Hughes Marino"
                companylocation="San Diego, Calif."
                companysector="Publishing"
              />
            </label>
            <Smallcontent
              summary="Hughes Marino is a real estate firm that exclusively represents tenants and buyers -- never landlords -- so it never has a conflict of interest. With offices across the nation, Hughes Marino has been helping companies lease, buy and build commercial space for over 25 years."
              location="San Diego, Calif."
              founded="2011"
              sector="Commercial Real Estate"
              number="74"
              website="http://hughesmarino.com/"
              imagesrc="https://companycultures.netlify.app/static/media/hughes.b5c7b380.jpg"
            />
          </div>
          <div className="tab">
            <input type="radio" id="rd3" name="rd" />
            <label className="tab-label" for="rd3">
              <div>
                <p>Item 3</p>
              </div>
            </label>
            <Smallcontent
              summary=""
              location=""
              founded=""
              sector=""
              number=""
              website=""
              imagesrc=""
            />
          </div>
          <div className="tab">
            <input type="radio" id="rd4" name="rd" />
            <label className="tab-label" for="rd4">
              <div>
                <p>Item 4</p>
              </div>
            </label>
            <Smallcontent
              summary=""
              location=""
              founded=""
              sector=""
              number=""
              website=""
              imagesrc=""
            />
          </div>
        </div>
      </div>
    )
  }
}

function SmallNav(props) {
  return (
    <div className="items-outer-container">
      <div className="items-company-container">
        <ul>
          <li>{props.rank}</li>
          <li>{props.companylogo}</li>
          <li>{props.companyname}</li>
        </ul>
        <ul>
          <li>{props.companylocation}</li>
        </ul>
        <ul>
          <li>{props.companysector}</li>
        </ul>
      </div>
    </div>
  );
}

function Smallcontent(props) {
  return (
    <div className="tab-content">
      <div className="tab-content-inner">
        <p>{props.summary}</p>
      </div>
      <div className="tab-content-company-info">
        <div className="company-pic">
          <img src={props.imagesrc} alt="" />
        </div>
        <div className="tab-ul-container">
          <ul>
            <li>Location</li>
            <li>Year Founded</li>
            <li>Sector</li>
            <li># of U.S. Employees</li>
            <li>Website</li>
          </ul>
          <ul>
            <li>{props.location}</li>
            <li>{props.founded}</li>
            <li>{props.sector}</li>
            <li>{props.number}</li>
            <li>{props.website}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

