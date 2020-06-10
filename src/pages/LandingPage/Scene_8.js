import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css';
import cx from 'classnames';
import logo from '../../assets/img/Logo.svg';
import scene8_phone from '../../assets/img/scene8_phone.png';
import { isWidthDown } from '@material-ui/core';
function Scene_8() {
  return (
    <div className={ styles.scene_8_container }>
        <div className = "row">
          <div className = "col-12 col-lg-6" >
            <img src = { scene8_phone } style = {{ width : '100%'}}/>
          </div>
          <div className = "col-12 col-lg-6">
            <div className = { styles.Scene8_right}>
              <div>
                <label className = { styles.Scene8_download }>Download</label>
              </div>
              <img src = { logo }/>
              <div>
                <label className = { styles.Scene8_text}>
                  Download Convert to experience our interactive “Cost & 
                  Earning calculator” simulator. We’ve built the best tools for
                  you to manage your monthly cash flow.
                </label>
              </div>
              <p style={{textShadow:'0px 9px 9px rgba(0, 0, 0, 0.25)', color:'red'}}>
                Early bird sign up! 18 Months Free!
              </p>            
            </div>
          </div>
        </div>
    </div>     
  )
}

export default CSSModules( Scene_8, styles );