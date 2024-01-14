import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <main>
        <section>
            <img src='./urban-logo.webp'></img>
        </section>
        <section >
            <article>
                <h4>Company</h4>
                <a href='#'>About Us</a>
                <a href='#'>Terms & Conditions</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Anti Discrimication Policy</a>
                <a href='#'>UC impact</a>
                <a href='#'>Careers</a>

            </article>
            <article>
            <h4>For Customers</h4>
                <a href='#'>UC Reviews</a>
                <a href='#'>Categories Near You </a>
                <a href='#'>Blog</a>
                <a href='#'>Contact Us</a>
            </article>
            <article>
            <h4>Company</h4>
                <a href='#'>Register As a Professional</a>
            </article>
            <article>
                <h4>Social Links</h4>
                <div></div>
                <div></div>
                <div></div>
            </article>
        </section>
      </main>
    )
  }
}
