import React, { Component } from "react";

export default class LeftSerBlock extends Component {
  render() {
    return (
      <div className="LeftSerBlock">
        <section>
          <h1 className="doorstap">
            Home services at your <br></br> doorstep
          </h1>
          <main className="leftSection">
            <div>
              <p className="doorstepHeading">What are you looking for?</p>
            </div>
            <article className="lookingFor">
              <aside className="lookAside1">
                <div>
                  <div className="grayDiv">
                    <img src="./LookingFor1.webp"></img>
                  </div>
                  <div>
                    Women's Salon, Spa & <br></br> Laser Clinic
                  </div>
                </div>
                <div>
                  <div className="grayDiv">
                    <img src="./LookingFor2.webp"></img>
                  </div>
                  <div>
                    Men's Salon & <br></br> Massage
                  </div>
                </div>
                <div>
                  <div className="grayDiv">
                    <img src="./LookingFor3.webp"></img>
                  </div>
                  <div>
                    AC & Appliance <br></br> Repair
                  </div>
                </div>
              </aside>
              <aside className="lookAside1">
                <div>
                  <div className="grayDiv">
                    <img src="./LookingFor4.webp"></img>
                  </div>
                  <div>
                    Cleaning & Pest <br></br> Control
                  </div>
                </div>
                <div>
                  <div className="grayDiv">
                    <img src="./LookingFor5.webp"></img>
                  </div>
                  <div>
                    Electrician, Plumber & <br></br> Carpenters
                  </div>
                </div>
                <div>
                  <div className="grayDiv">
                    <img src="./LookingFor6.webp"></img>
                  </div>
                  <div>
                    Painting & <br></br> Waterproofing
                  </div>
                </div>
              </aside>
            </article>
            <article className="byuProducts">Buy Products</article>
            <article> <img className="festiveSale" src="./festiveSale.webp"></img></article>
          </main>
        </section>
      </div>
    );
  }
}
