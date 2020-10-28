import React, { Component } from 'react';

class Fibonacci extends Component {
 state = {
   current: 1,
   previous: 0
 }

 handleIncrement = () => {
   let previous = this.state.previous;
   let current = this.state.current;
   var temp = 0;
   this.setState({previous: current});
   temp = previous + current;
   this.setState({current: temp});
 }

 handleDecrement = () => {
   let previous = this.state.previous;
   if(previous !== 0){
     let current = this.state.current;
     var temp = 0;
     this.setState({current: previous});
     temp = current - previous;
     this.setState({previous: temp});
   }
 }

  render() {
    return (
      <div>
        <button
          className='btn-md btn-danger m-2'
          onClick={this.handleDecrement}>
            -
        </button>
        <span className='badge badge-pill badge-primary'>{this.state.current}</span>
        <button
          className='btn-md btn-success m-2'
          onClick={this.handleIncrement}>
            +
        </button>
      </div>
    );
  }

}

export default Fibonacci;
