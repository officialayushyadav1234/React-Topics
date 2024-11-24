//-----------------  Class Based Component ----------------
/*
    1.  There is one built in property called as state
        So, class based component called as statefull Component.
    2.  Hooks are not supported.
    3.  Life Cycle methods are present.
    4.  Render method is mandatory. 
    5.  this keyword points to current class 
        based component.
*/

import { Component } from "react";

class StatesInCBC extends Component {
  state = { count: 0 };

  increment = () => {
   this.setState({count:this.state.count+1})
  };

  render() {
    return (
      <div>
        <h2>CBC Component {this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
export default StatesInCBC;
