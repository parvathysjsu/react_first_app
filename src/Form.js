import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox';

export default class Form extends Component {
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
       <button type="button" class = "buttonSubmit"> Submit </button>
      </form>
      </div>
    );
  }
}