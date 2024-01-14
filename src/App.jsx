import React, { Component } from 'react'
import NavbarContainer from './coponents/navbar/NavbarContainer'
import ServiceBlock from './coponents/services/ServiceBlock'
import AllCorusoles from './coponents/corusoles/AllCorusoles'

class App extends Component {
  render() {
    return (
      <div><NavbarContainer/>
      <ServiceBlock/>
      <AllCorusoles/>
      </div>
    )
  }
}

export default App