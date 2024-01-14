import React, { Component } from 'react'

export default class Carousel4 extends Component {
  render() {
    return (
      <main className='carousel4Main'>
        <h1>Salon For Women</h1>
        <article className='carousel4Article'>
            <section>
                <p>Waxing</p>
                <div>
                    <img src='c4u1.webp'></img>
                </div>
            </section>
            <section>
                <p>Pedicure</p>
                <div>
                    <img src='c4u2.webp'></img>
                </div>
            </section>
            <section>
                <p>Facial & Cleanup</p>
                <div>
                    <img src='c4u3.webp'></img>
                </div>
            </section>
            <section>
                <p>Manicure</p>
                <div>
                    <img src='c4u4.webp'></img>
                </div>
            </section>
            <section>
                <p>Threading & Face Wax</p>
                <div>
                    <img src='c4u5.webp'></img>
                </div>
            </section>
        </article>
      </main>
    )
  }
}
