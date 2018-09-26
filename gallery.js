import React from "react";
import { Divider, Image } from "semantic-ui-react";
import { Icon, Label } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { List } from "semantic-ui-react";

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0
    };
  }

  render() {
    const { index } = this.state;
    const { photos } = this.props;
    const { texts } = this.props;

    return (
      <div>
        <Image src={photos[index]} width="330" height="290" />
        <List foated="right" horizontal>
          <List.Item>
            <Header as="h2">{texts[index]}</Header>
          </List.Item>
          <List.Item>
            <Button
              onClick={() => {
                this.setState({ index: (index + 1) % photos.length });
              }}
            >
              Next
            </Button>
          </List.Item>
          <List.Item>
            <Icon disabled name="comments outline" size="large" />
          </List.Item>
        </List>
      </div>
    );
  }
}

export default Gallery;
