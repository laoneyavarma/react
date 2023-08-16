import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <h1>hai hello welcome {this.props.name} have {this.props.age} years old</h1>
      </div>
    )
  }
}
