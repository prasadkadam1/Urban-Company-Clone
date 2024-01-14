import React, { Component } from 'react'
import Logo from './Logo'
import SearchComp from './SearchComp'
import Menu from './Menu'

export default class NavbarContainer extends Component {
  render() {
    return (
      <div className='navbarContainer'>
      <article>
        <Logo/>
        <SearchComp/>
        <Menu/>
        </article>

      </div>
      
    )
  }
}
