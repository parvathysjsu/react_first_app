import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: "Please fill the form",
    };
  }

  handleClick() {
    let squares = this.state.status.slice();
    squares = "Thank you for filling the form!!";
    this.setState({status: squares});
  }

  render() {
    return (
        <div class="container">
      <form>
        <InputBox
          name="Name"
          id="name"
        />
        <InputBox
          name="Age"
          id="age"
        />
        <InputBox
          name="Subject"
          id="subject"
        />
       <button type="button" class = "buttonSubmit" onClick={() => this.handleClick()}> Submit </button>      
      </form>
      <h3> {this.state.status}</h3>
      </div>
    );
  }
}