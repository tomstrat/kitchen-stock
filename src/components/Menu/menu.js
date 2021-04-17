import React from "react";
import "./menu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faCog, faClipboardList, faBaby } from '@fortawesome/free-solid-svg-icons'

//Expects a quantity, name and image link

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="menuContainer">
        <a href="#" className="menuItem">
          <FontAwesomeIcon icon={faCarrot} />
        </a>
        <div className="divider"></div>
        <a href="#" className="menuItem">
          <FontAwesomeIcon icon={faClipboardList} />
        </a>
        <div className="divider"></div>
        <a href="#" className="menuItem">
          <FontAwesomeIcon icon={faBaby} />
        </a>
        <div className="divider"></div>
        <a href="#" className="menuItem">
          <FontAwesomeIcon icon={faCog} />
        </a>
      </div>
    );
  }
}