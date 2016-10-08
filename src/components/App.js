import React, { Component } from 'react';
import '../assets/styles/animate.css';
import '../assets/styles/App.css';
import ReactCSSTransitionGroup from'react/lib/ReactCSSTransitionGroup'

class App extends Component {
  constructor() {
    super();
    this.transitionTimeout = 550;
  }

  render() {
    return (
      <div className="App">
        <ReactCSSTransitionGroup
          component="div"
          className="App-view"
          transitionName="page"
          transitionEnterTimeout={this.transitionTimeout }
          transitionLeaveTimeout={this.transitionTimeout }
          >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          }) }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default App;

