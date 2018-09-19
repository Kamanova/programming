import React, { Component } from "react";

class Menu extends Component {
  render() {
    const { onChange } = this.props;

    return (
      <div>
        <button
          onClick={() => {
            onChange("soups", "soupsDescription");
          }}
        >
          soups
        </button>
        <button
          onClick={() => {
            onChange("desserts", "dessertsDescription");
          }}
        >
          desserts
        </button>
        <button
          onClick={() => {
            onChange("snacks", "snacksDescription");
          }}
        >
          snacks
        </button>
      </div>
    );
  }
}

export default Menu;
