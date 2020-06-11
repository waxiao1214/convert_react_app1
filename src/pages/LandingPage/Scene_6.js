import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css'
import Header from '../../components/Header';
import scene_1_phone from '../../assets/img/scene1_phone.png';
import phone1 from '../../assets/img/Scene6_phone1.svg';
import phone2 from '../../assets/img/Scene6_phone2.svg';
import cx from 'classnames'
import silver from '../../assets/img/silver.svg';
import gold from '../../assets/img/gold.svg';
import platinum from '../../assets/img/platinum.svg';
import diamond from '../../assets/img/diamond.svg';
import Card from '../../components/Card';
const title1 = "Silver Member";
const text = "Continue 6 months usage auto upgrade to Gold";
const text2 = "Continue 6 months usage auto upgrade to Platinim";
const text3 = "Continue 12 months usage auto upgrade to Diamond";
const text4 = "Continue 12 months usage you will auto upgrade from Platinum to Diamond"
function Scene_6() {
  return (
    <div className={ styles.scene_4_container }>
      <h1 className = {styles.Scene5_title}>
        <strong className = { styles.strong }>Membership Benefits</strong>
      </h1>
      <div className = "row" style = {{textAlign:'center'}}>
        <div className = "userml">
          <div className = "col-12 col-md-3">
            <div className = {styles.card, styles.membershipCard1}>
              <Card image = { silver } title = { title1 } percent = {20} text = { text } color = "#1C202B"/>
            </div>
          </div>
          <div className = "col-12 col-md-3">
            <div className = {styles.card, styles.membershipCard2}>
              <Card image = { gold } title = "Gold Member" color ="white" percent = {25} text = {text2}/>
            </div>
          </div>
          <div className = "col-12 col-md-3">
            <div className = {styles.card, styles.membershipCard3}>
              <Card image = { platinum } title = "Platinum Member" color = "#FFFFFF" percent = {33} text = {text3}/>
            </div>
          </div>
          <div className = "col-12 col-md-3">
            <div className = {styles.card, styles.membershipCard4}>
              <Card image = { diamond } title = "Diamond Member" color = "#FFFFFF" percent = {51} text = {text4}/>
            </div>
          </div>                       
        </div>
      </div>
      <div className = "row" style = {{ paddingTop : '100px'}}>
        <div className = "userml">
          <div className = "col-12 col-md-6  d-flex">
            <div>
              <img src = { phone1 }/>
            </div>
            <div>
              <h1  className = { styles.membership_title} >How to Gain Membership Point</h1>
            </div>
          </div>
          <div className = "col-12 col-md-6  d-flex">
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