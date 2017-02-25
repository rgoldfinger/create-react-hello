import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css'

class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = { greetings: ['Jim', 'Sally'] };
  }
  
  render() {
    return (
      <div className="HelloWorldList">
        <HelloWorld name="Jim"/>
        <HelloWorld name="Sally"/>
      </div>
    );
  }
}

export default HelloWorldList;
