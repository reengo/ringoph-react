import React, { Component } from 'react';
import Background from '../img/image1_parallax.jpg';

import widget1 from '../img/widget-ctl.jpg';
import widget2 from '../img/widget-cs.jpg';
import widget3 from '../img/widget-whwc.jpg';
import widget4 from '../img/widget-ccc.jpg';

import widget5 from '../img/widget-bjt.jpg';
import widget6 from '../img/widget-pl.jpg';
import widget7 from '../img/widget-ct10.jpg';
import widget8 from '../img/widget-roc.jpg';

import full1 from '../img/fullica.jpg';
import full2 from '../img/fullkra.jpg';
import full3 from '../img/fulloryx.jpg';
import full4 from '../img/fulll4l.jpg';

class Works extends React.Component {
  render() {
    return (

		<section id="works" class="post-block dark noimage folio" data-step="5">
      <article class="section-content">
        <h2>Some Works</h2>
        <div id="folio-reel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <div class="folio-list row">
                <div class="folio-item col-sm-3">
                  <a href="#"><img src={widget1} class="img-polaroid" /></a>
                </div>

                <div class="folio-item col-sm-3">
                  <a href="#"><img src={widget2} class="img-polaroid" /></a>
                </div>

                <div class="folio-item col-sm-3">
                  <a href="#"><img src={widget3} class="img-polaroid" /></a>
                </div>

                <div class="folio-item col-sm-3">
                  <a href="#"><img src={widget4} class="img-polaroid" /></a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="folio-list row">
                <div class="folio-item col-sm-3">
                  <a href="#"><img src={widget5} class="img-polaroid" /></a>
                </div>

                <div class="folio-item col-sm-3">
                  <a href="#"><img src={widget6} class="img-polaroid" /></a>
                </div>

                <div class="folio-item col-sm-3">
                  <a href="#"><img src={widget7} class="img-polaroid" /></a>
                </div>

                <div class="folio-item col-sm-3">
                  <a href="#"><img src={widget8} class="img-polaroid" /></a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="folio-list row">
                <div class="folio-item col-sm-3">
                  <a href="#"><img src={full1} class="img-polaroid" /></a>
                </div>

                <div class="folio-item col-sm-3">
                  <a href="#"><img src={full2} class="img-polaroid" /></a>
                </div>

                <div class="folio-item col-sm-3">
                  <a href="#"><img src={full3} class="img-polaroid" /></a>
                </div>
                
                <div class="folio-item col-sm-3">
                  <a href="#"><img src={full4} class="img-polaroid" /></a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <button class="more">See more of these awesome works</button>
      </article>
    </section>
	);
}
}

export default Works




