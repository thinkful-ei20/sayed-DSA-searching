import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
    }
  }

  linearClick(num) {
    let numbers = this.state.numbers;
    let number = parseInt(num, 10);
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      count++;
      if (number === numbers[i]) {
        console.log(`${num} found in ${count} step(s)`);
        return;
      }
    }
    console.log(`${num} not found after ${count} step(s)`)
  }

  binaryClick(num, start=0, end=this.state.numbers.length, count=1) {
    let sorted = this.state.numbers.slice().sort((a,b) => a - b);
    let number = parseInt(num, 10);
    let index = Math.floor((start + end) / 2);
    let item = sorted[index]
    if (item === number) {
      console.log(sorted)
      console.log(`${number} found in ${count} step(s)`)
      return index;
    } else if (item < number) {
      return this.binaryClick(number, index + 1, end, count+=1);
    } else if ( item > number) {
      return this.binaryClick(number, start, index - 1, count+=1);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Testing</h1>
        <input type='number' ref={input => (this.input = input)}/>
        <button onClick={() => this.linearClick(this.input.value)}>linear</button>
        <button onClick={() => this.binaryClick(this.input.value)}>binary</button>
      </div>
    );
  }
}

export default App;
