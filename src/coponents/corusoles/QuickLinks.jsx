import React, { Component } from 'react'
import {BiSolidChevronDown} from "react-icons/bi"
export default class QuickLinks extends Component {
  render() {
    return (
      <main className='QuickLinks'>
        <h1>Quick Links</h1>
        <section>
            <article>
                <p>Serving in</p>
                <BiSolidChevronDown/>
            </article>
            <article>
                <p>Categories</p>
                <BiSolidChevronDown/>
            </article>
            <article>
                <p>Now Serving in United States</p>
                <BiSolidChevronDown/>
            </article>
        </section>
      </main>
    )
  }
}
