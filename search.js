import React from "react";
import style from "./style.css";
import { List } from "semantic-ui-react";

class Item extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "List of dishes"
    };

    this.filterList = this.filterList.bind(this);
  }
  // фильтр
  filterList(e) {
    var filteredList = this.state.items.filter(function(item) {
      return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    // обновление состояния
    this.setState({ items: filteredList });
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <input placeholder="Поиск" onChange={this.filterList} />
        <List>
          {this.props.items.map(name => (
            <List.Item>
              <a onClick={() => this.props.onItemClick(name)}>{name}</a>
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default ItemsList;
