import React, { Component } from 'react'

class Menu extends Component {
  render() {
    const { onChange } = this.props

    return (
      <div>
        <input type="text" name="recip" />
        <button>Find</button>
        <dr />

        <button onClick={() => onChange('soups')}>soups</button>
        <button onClick={() => onChange('desserts')}>desserts</button>
        <button onClick={() => onChange('snacks')}>snacks</button>
      </div>
    )
  }
}

export default Menu
