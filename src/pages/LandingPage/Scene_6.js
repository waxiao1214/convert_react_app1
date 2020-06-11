import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css'
import Header from '../../components/Header';
import scene_1_phone from '../../assets/img/scene1_phone.png';
import phone1 from '../../assets/img/Scene6_phone1.svg';
import phone2 from '../../assets/img/Scene6_phone2.svg';
import cx from 'classnames'
function Scene_6() {
  return (
    <div className={ styles.scene_4_container }>
      <h1 className = {styles.Scene5_title}>
        <strong className = { styles.strong }>Membership Benefits</strong>
      </h1>
      <div className = "row" style = {{textAlign:'center'}}>
        <div className = "userml d-flex">
          <div className = {styles.card, styles.membershipCard1}></div>
          <div className = {styles.card, styles.membershipCard2}></div>
          <div className = {styles.card, styles.membershipCard3}></div>
          <div className = {styles.card, styles.membershipCard4}></div>
        </div>
      </div>
      <div className = "row" style = {{ paddingTop : '100px'}}>
        <div className = "userml d-flex">
          <div className = "col-12 col-lg-6  d-flex">
            <div>
              <img src = { phone1 }/>
            </div>
            <div>
              <h1  className = { styles.membership_title} >How to Gain Membership Point</h1>
            </div>
          </div>
          <div className = "col-12 col-lg-6  d-flex">
            <div>
              <img src = { phone2 }/>
            </div>
            <div>
              <h1 className = { styles.membership_title }>Transfrom your good credit into more earning now!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>     
  )
}

export default CSSModules( Scene_6, styles );