import React, { Component } from 'react'
import LeftSerBlock from './LeftSerBlock'
import RightSerBlock from './RightSerBlock'

export default class ServiceBlock extends Component {
  render() {
    return (
      <div className='serviceBlock'>
        <LeftSerBlock/>
        <RightSerBlock/>
      </div>
    )
  }
}
