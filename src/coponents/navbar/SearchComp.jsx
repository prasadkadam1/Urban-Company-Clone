import React, { Component } from "react";
import { GrLocation } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
// import { FiSearch } from "react-icons/fi";
import {IoSearch} from "react-icons/io5"
// import {BiSearch} from "react-icons/bi"

export default class SearchComp extends Component {
  render() {
    return (
      <div className="searchComp">
        <aside className="searchDivide">
          <div className="leftSearch">
            <span className="leftIcon">
              <GrLocation />
            </span>
            <span className="inputContent">
              <input type="text" placeholder="Bangalore"></input>
            </span>
            <span className="iconRight">
              <FaAngleDown />
            </span>
          </div>
          <div className="rightSearch">
            <span className="icon-left">
              <IoSearch/>
            </span>
            <span className="input-content">
              <input type="text" placeholder="search for cleaning.."></input>
            </span>
          </div>
        </aside>
      </div>
    );
  }
}
