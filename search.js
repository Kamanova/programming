import React from "react";
import style from "./style.css";

class Item extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "List of dishes",
      items: [
        "Борщ",
        "Уха",
        "Рассольник",
        "Том ям",
        "Грибной",
        "Желе",
        "Булка",
        "Кекс",
        "Тирамису",
        "Цезарь",
        "Блинчики с мясом",
        "Сырная тарелка"
      ]
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
      <div style={{ color: "red" }}>
        <h2>{this.state.title}</h2>
        <input placeholder="Поиск" onChange={this.filterList} />
        <ul>
          {this.state.items.map(function(item) {
            return <Item key={item} name={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ItemsList;
