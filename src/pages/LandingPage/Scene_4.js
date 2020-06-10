import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css';
import Scene4 from '../../assets/img/Scene4.png';
import dotSquare from '../../assets/img/dotSquare.png';

function Scene_4() {
  return (
    <div className = { styles.scene_4_container }>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div data-aos="fade-left" >
            <img className = { styles.Scene4 } src = { Scene4 }/>
          </div>
        </div>
        <div className="col-12 col-lg-6 defalut_font">
          <img className = { styles.dotSquare } src = { dotSquare }/>
          <h1><strong className = { styles.strong }><b>Cost & Earning </b>Calculator</strong></h1>
          <p>We've built this instant illustration tools to let you
          understand how much you will get (Cash Point) from your
          transaction as well as in long term basis (6, 12 Months).</p>
          <p>
            Download <b>"CONVERT"</b> now and experience a new
            breakthrough platform just designed to enhance<br/>
            your lifestye.
          </p>
          <p style={{textShadow:'0px 9px 9px rgba(0, 0, 0, 0.25)', color:'red'}}>
            Early bird sign up! 18 Months Free!
          </p>
        </div>
      </div>
    </div>
  )
}

export default CSSModules( Scene_4, styles );