import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component { //KJL: is using class in React normal? or is this just something this tutorial author is doing? the couple of people I've talked to about `class` said to avoid it...
  constructor(props) {
    super(props); // KJL: what is the super, here? is it different with React-magic, or is it the normal super?
    this.state = { greeting: 'Hello' };
    this.frenchify = this.frenchify.bind(this);
  }

  frenchify() {
    // KJL: the tutorial had me add the following line before I added the frenchify.bind call above. As you'd imagine, this didn't work until I did that.
    // Question is: when this didn't work, how could I've debugged to find where the `this` is? I could only set a breakpoint in this function, is there anywhere useful up the callstack I could place a breakpoint to see the calling context?
    this.setState({greeting: "Bonjour"});
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
