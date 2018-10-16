import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import Toggle from './Toggle';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        </header>
        < Welcome name ="Umamahesh and K Sudarshan"/>
        <Toggle />
      </div>
    );
  }
}

export default App;

///echo "# reactApp" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin https://github.com/chityalaumamahesh/reactApp.git
// git push -u origin master
