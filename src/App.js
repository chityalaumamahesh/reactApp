import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Hello, world!</h1>
          <img src={logo} className="App-logo" alt="logo" />
          
          <a className="App-link"
            rel="noopener noreferrer"> 
            </a>
        </header>
      </div>
    );
  }
}

export default App;

//*echo "# reactApp" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/chityalaumamahesh/reactApp.git
git push -u origin master*/
