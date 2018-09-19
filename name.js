import React, { Component } from 'react'
class Name extends Component {
  render() {
    const { onEmersion } = this.props
    return (
      <div>
        <button onClick={() => onEmersion('Time')}>Time</button>
      </div>
    )
  }
}

export default Time
