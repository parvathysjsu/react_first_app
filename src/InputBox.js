import React, { Component } from 'react';
import './App.css';

export default class InputBox extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    // const { name, address = {} } = this.props;

    console.log(this.props);

    return (
      <div class="row">
        <div class="col-25">
          <label for={this.props.id}>{this.props.name}</label><br/>
        </div>
        <div class="col-75">
          <input type="text" id={this.props.id} name={this.props.id} /><br/>
        </div>
      </div>
    );
  }
}


