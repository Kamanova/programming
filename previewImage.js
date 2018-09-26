import React, { Component } from "react";
import { Image } from "semantic-ui-react";

class PreviewImage extends Component {
  render() {
    return <Image src={this.props.src} />;
  }
}

export default PreviewImage;
