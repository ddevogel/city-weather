import React, { Component } from 'react';
import Report from './report'; 

class Main extends Component {
  render() {
    return  <div className="row">
              <Report title="Weather Report 1"/>
              <Report title="Weather Report 2"/>
            </div>;
  }
}

export default Main;