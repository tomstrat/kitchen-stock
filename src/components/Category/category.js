import React from "react";
import Item from "../Item/item";
import "./category.css";

//Expects an array of item objects to display and a category title

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="categoryContainer">
        <h2>{this.props.title}</h2>
        <div className="itemsContainer">
          {this.props.items.map((item, key) => {
            return (
              <Item name={item.name} quantity={item.quantity} image={item.image}/>
            );
          })}
        </div>
      </div>
    );
  }

}