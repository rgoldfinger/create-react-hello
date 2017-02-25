import React, { Component } from 'react';
import './HelloWorld.css';

// const HelloWorld = (props) => {
//   return (<div className="HelloWorld">Hello {props.name}!</div>);
// }

class HelloWorld extends Component {
  constructor(props) {
    super(props); // KJL: what is the super, here? ...like, I know what "super" generally refers to, just what's the super of HelloWorld?
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
