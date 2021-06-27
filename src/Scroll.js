// Scroll to position (20, 500) in the browser window
import React, { Component } from "react";
import { ScrollTo } from "react-scroll-to";
import './index.css'

export default class Scroll extends Component {
  render() {
    const Header = {
        padding: "10px 20px",
        textAlign: "center",
        color: "white",
        fontSize: "32px",
        backgroundColor: "rgb(102, 68, 180)",
        cursor: "pointer",
        fontFamily: "Jost, sans-serif",
      }
    return (
      <ScrollTo>
        {({ scroll }) => (
          <a onClick={() => scroll({ x: 0, y: 1350, smooth: true })} style={Header}>Описание</a>
        )}
      </ScrollTo>
    );
  }
}