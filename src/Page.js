import React, {Component} from 'react';  
import './App.css';
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
    render() {
      return (
        <div>
            <div className="App-left">
            <ul>{listItems}</ul>
            </div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number,index) =>
        <li key={number.toString()}>{number}</li>
        //key={todo.id}
        // Only do this if items have no stable IDs
        //key={todo.id}
    );
  function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
export default Page;  