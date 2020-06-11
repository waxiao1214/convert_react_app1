import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css';
import Scene4 from '../../assets/img/Scene4.png';
import dotSquare from '../../assets/img/dotSquare.png';
import googlePlay from '../../assets/img/Googleplay.png';
import appStore from '../../assets/img/appleStore.png';

function Scene_4() {
  return (
    <div className = { styles.scene_4_container }>
      <div className="row">
        <div className = "userml">
          <div className="col-12 col-md-6">
            <div data-aos="fade-left" style = {{textAlign : 'center'}}>
              <img className = { styles.Scene4 } src = { Scene4 }/>
            </div>
          </div>
          <div className="col-12 col-md-6 defalut_font" style = {{ paddingLeft: '61px'}}>
            <div className = { styles.cost_earning}>
              <img className = { styles.dotSquare } src = { dotSquare }/>
              <h1 className = { styles.cost_earning_title }><strong className = { styles.strong }><b>Cost & Earning </b>Calculator</strong></h1>
              <p className = {styles.cost_earning_content}>We've built this instant illustration tools to let you
              understand how much you will get (Cash Point) from your
              transaction as well as in long term basis (6, 12 Months).</p>
              <p className = {styles.cost_earning_content}>
                Download <b>"CONVERT"</b> now and experience a new
                breakthrough platform just designed to enhance<br/>
                your lifestye.
              </p>
              <p style={{textShadow:'0px 9px 9px rgba(0, 0, 0, 0.25)', color:'red', paddingBottom : '20px'}}>
                <b>Early bird sign up! 18 Months Free!</b>
              </p>
              <div>
              <img src = { googlePlay } style = {{paddingRight : '24px', height:'48px'}}/>
              <img src = { appStore } style = {{height : '48px'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CSSModules( Scene_4, styles );