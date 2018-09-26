import React, { Component } from "react";
import { Button, Divider } from "semantic-ui-react";

class Menu extends Component {
  render() {
    const { onChange } = this.props;

    return (
      <div>
        <Button.Group widths="5">
          <Button
            onClick={() => {
              onChange("soups", "soupsDescription");
            }}
          >
            soups
          </Button>
          <Button
            onClick={() => {
              onChange("desserts", "dessertsDescription");
            }}
          >
            desserts
          </Button>
          <Button
            onClick={() => {
              onChange("snacks", "snacksDescription");
            }}
          >
            snacks
          </Button>
        </Button.Group>
      </div>
    );
  }
}

export default Menu;
