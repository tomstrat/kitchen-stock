import React from "react";
import "./item.css";

//Expects a quantity, name and image link

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.quantity
    }
  }

  render() {
    return (
      <div className={"item"}>
        <div style={{backgroundImage: `url(${this.props.image})`}} className={"itemInner"}>
          <div 
            className={"minus quantifier"}
            onClick={() => this.changeQuantity("down")}
          >-</div>
          <div className={"quantity"}>{this.state.quantity}</div>
          <div 
            className={"plus quantifier"}
            onClick={() => this.changeQuantity("up")}
          >+</div>
        </div>
        <div className={"itemName"}>
          {this.props.name}
        </div>
      </div>
    );
  }

  changeQuantity(change){
    if(change === "down" && this.state.quantity != 0){
      this.setState({quantity: this.state.quantity - 1});
    } else if(change === "up" && this.state.quantity < 99){
      this.setState({quantity: this.state.quantity + 1});
    }
  }
}