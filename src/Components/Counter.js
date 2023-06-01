import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
          count : 0
        };
      }

       
      increment =() => {
        this.setState({count: this.state.count +1})
      }
        
      
     
     decrement = () => {
        this.setState({count: this.state.count > 0 ? this.state.count -1 : this.state.count})
      }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
           <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>-</button>
        </div>
    )
  }
}

