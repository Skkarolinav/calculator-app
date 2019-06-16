import React, { Component } from 'react';

import * as math from 'mathjs';

import Button from './components/button/Button';
import Result from './components/result/Result';
import Reset from './components/reset/Reset';

class App extends Component{
  state={
    input:'',
  }

  addToInput = (val) => {
    this.setState({
      input: this.state.input + val
    })
  }

  handleCalculate = () => {
    this.setState({
      input: math.evaluate(this.state.input)
    })
  }

  handleReset = () => {
    this.setState({
      input: ''
    })
  }

  render(){
    return (
      <div className='my-container d-flex justify-content-center align-items-center'>
        <div className='col-12 col-md-3'>
          <div className='row'>
            <Result input={this.state.input}></Result>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleCalculate()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className='row'>
            <Reset handleClear={() => this.handleReset()}>Clear</Reset>
          </div>
        </div>
      </div>
    )
  }
}

export default App;