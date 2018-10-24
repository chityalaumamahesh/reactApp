import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Page from './Page';
import Embededmap from './Embededmap';
import NameForm from './NameForm';

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
      <div>
        <header className="App-header">
        
        </header>
        < Welcome name ="welcome to dashboard"/>
        
        <div className="App">
        <NameForm />
        <Toggle />
        <LoginControl />
        <Page/>
        <Embededmap />
        </div>
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
