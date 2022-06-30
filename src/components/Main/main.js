import './main.css'
import React from 'react'
import Home2 from './img/home2.png'
import Wave from './img/wave1.png'

function Main() {
    return (
<section id="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p class="promo-title">MELHOR AGÊNCIA DIGITAL</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet obcaecati suscipit dolores sit
            itaque, consectetur ex fuga quam ullam! Tempore voluptate fuga rem beatae ipsa velit illum a. Quae.</p>
        </div>

        <div class="col-md-6 text-center">
          <img src={Home2} class="img-fluid"></img>
        </div>
      </div>


    </div>

    <img src={Wave} class="bottom-img"></img>

  </section>
    );
}

export default Main;
