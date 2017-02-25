import React, { Component } from 'react';
import './HelloWorld.css';

// const HelloWorld = (props) => {
//   return (<div className="HelloWorld">Hello {props.name}!</div>);
// }

class HelloWorld extends Component { //KJL: is using class in React normal? or is this just something this tutorial author is doing? the couple of people I've talked to about `class` said to avoid it...
  constructor(props) {
    super(props); // KJL: what is the super, here? is it different with React-magic, or is it the normal super?
    this.state = { greeting: 'Hello' };
    this.frenchify = this.frenchify.bind(this);
  }

  frenchify() {
    this.setState({greeting: "Bonjour"}); // KJL: when this doesn't work, how do I debug to find where the `this` is?
  }

  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br />
        <button onClick={this.frenchify}>Frenchify!</button>
      </div>
    );
  }
}

export default HelloWorld;
