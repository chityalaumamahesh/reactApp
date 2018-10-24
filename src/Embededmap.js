import React, {Component} from 'react';
  class EmbeddedMap extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        
    }
    componentWillUnmount(){
    }
        render(){
          return(
            <NumberList numbers={numbers} />
          )
      }
  }  
  const numbers = [1, 2, 3, 4, 5];
  function ListItem(props) {
    return <li>{props.value}</li>;
  }
  function NumberList(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
        )}
      </ul>
    );
  }
  export default EmbeddedMap;
  