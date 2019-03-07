import React, { Component } from 'react'

export default class profileModal extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="title"></input>
        <textarea placeholder="Description"></textarea>
        <input type="text" placeholder="Price"></input>
        <input type="text" placeholder="Profile Image"></input>
      </div>
    )
  }
}
