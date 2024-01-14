import React, { Component } from 'react'

export default class Carousel3 extends Component {
  render() {
    return (
      <main>
      <h1 className='carousel3H1'>Most booked services</h1>
        <article className='carouse3unit1'>
          <section>
               <img src='./c3u1.webp'></img>
               <p>Intense bathroom cleaning</p>
               <p>⭐4.76(1.1M)</p>
               <p>Rs.499/-</p>
          </section>
          <section>
               <img src='./c3u2.webp'></img>
               <p>Classic bathroom cleaning</p>
               <p>⭐4.80(862.7K)</p>
               <p>Rs.399/-</p>
          </section>
          <section>
               <img src='./c3u3.webp'></img>
               <p>Haircut For Men</p>
               <p>⭐4.87(680K)</p>
               <p>Rs.249/-</p>
          </section>
          <section>
               <img src='./c3u4.webp'></img>
               <p>Sofa Cleaning</p>
               <p>⭐4.85(108K)</p>
               <p>Rs.739/-</p>
          </section>
          <section>
               <img src='./c3u5.webp'></img>
               <p>Elysian British Rose Pedicure</p>
               <p>⭐4.80(198.6K)</p>
               <p>Rs.859/-</p>
          </section>
        </article>
      </main>
    )
  }
}
