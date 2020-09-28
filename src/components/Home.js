import React, { Component } from 'react'
import Topnav from "./Topnav";
import Bottomnav from "./Bottomnav";
import Companies from "./Companies";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Topnav />
        <Bottomnav />
        <Companies />
      </div>
    )
  }
}
