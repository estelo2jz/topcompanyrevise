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
              <div>
                <p>Item 1</p>
              </div>
            </label>
            <div className="tab-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
            </div>
          </div>
          <div className="tab">
            <input type="radio" id="rd2" name="rd" />
            <label className="tab-label" for="rd2">
              <div>
                <p>Item 2</p>
              </div>
            </label>
            <div className="tab-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
            </div>
          </div>
          <div className="tab">
            <input type="radio" id="rd3" name="rd" />
            <label className="tab-label" for="rd3">
              <div>
                <p>Item 3</p>
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

