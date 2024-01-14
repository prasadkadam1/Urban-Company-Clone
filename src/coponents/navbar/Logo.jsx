import React, { Component } from 'react'
// import LOGO from "./urban-logo.webp"
export default class Logo extends Component {
  render() {
    return (
      <div className='logo'>
        <a href=''>
        <span>
            <picture>
                <img src='./urban-logo.webp'></img>
            </picture>
            </span>
        </a>
      </div>
    )
  }
}
