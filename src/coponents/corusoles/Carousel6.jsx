import React, { Component } from 'react'

export default class Carousel6 extends Component {
  render() {
    return (
      <main className='carouse6Main'>
        <h1>Spa For Women</h1>
        <p>Refresh.Rewind.Rejuvenate</p>
        <section className='carousrel6Section'>
            <article>
                <p>Stress Relief</p>
                <div>
                    <img src='./c6u1.webp'></img>
                </div>
            </article>
            <article>
            <p>Pain Relief</p>
                <div>
                    <img src='./c6u2.webp'></img>
                </div>
            </article>
            <article>
            <p>Natural Skincare</p>
                <div>
                    <img src='./c6u3.webp'></img>
                </div>
            </article>
            
        </section>
      </main>
    )
  }
}
