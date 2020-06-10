import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css'
import Header from '../../components/Header';
import scene_1_phone from '../../assets/img/scene1_phone.png'
import cx from 'classnames'
function Scene_6() {
  return (
    <div className={ styles.scene_4_container }>
      <h1 className = {styles.Scene5_title}>
        <strong className = { styles.strong }>Membership Benefits</strong>
      </h1>
      <div className = "row" style = {{textAlign:'center'}}>
          <div className = {styles.card, styles.membershipCard1}></div>
          <div className = {styles.card, styles.membershipCard2}></div>
          <div className = {styles.card, styles.membershipCard3}></div>
          <div className = {styles.card, styles.membershipCard4}></div>
      </div>
    </div>     
  )
}

export default CSSModules( Scene_6, styles );