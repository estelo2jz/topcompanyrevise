import React from 'react';
import "../styles/large.scss";

function LargeComp(props) {
  return (
    <div className="large-header-container">
      <div className="company-name-container">
        <p>{props.rank}</p>
        <p>{props.logo}</p>
        <p>{props.companyname}</p>
        <p>{props.companylocation}</p>
        <p>{props.companysector}</p>
      </div>
    </div>
  )
}

export default LargeComp

