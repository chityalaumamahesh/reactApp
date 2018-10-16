import React, { Component } from 'react';

function FormattedDate(props) {
  return <h2>It is: {props.date.toLocaleTimeString()}.</h2>;
}
class Welcome extends React.Component {
  constructor(props) {
    console.log("props",props);
    super(props);
    this.state = {
      date: new Date(),
      posts:[],
      comments:[]
    };
    this.name = "React App";
  }
    componentDidMount() {
      this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
      //update posts and comments with separate setState() calls
    //   fetchPosts().then(response => {
    //   this.setState({
    //     posts: response.posts
    //   });
    // });

  componentWillUnmount() {
     clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date:new Date()
    });
  }
  // Correct accepts first parameter as the previous state
  // this.setState(function(state, props) {
  //   return {
  //     counter: state.counter + props.increment
  //   };
  // });
  render() {
    return (
      <div>
        <h1>{this.name} </h1>
        <p>{this.props.name}</p>
        <FormattedDate date={this.state.date} />
        </div>
    );
  }
}


export default Welcome;
