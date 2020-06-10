import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css';
import Scene2 from '../../assets/img/Scene2.png'
import logo1 from '../../assets/img/Logo1.svg';
function Scene_2() {
  return (
    <div className = { styles.scene_2_container }>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div>
            <img data-aos="fade-right" className = { styles.Scene2 } src = { Scene2 }/>
          </div>
        </div>
        <div className = 'col-12 col-lg-6 defalut_font'>
            <h1 className = { styles.introduce}>Introduce</h1>
            <img className= { styles.logo } src= { logo1 }/>
            completely rethink everything about internet & traditional economy's value creation.
            We choose to help user to ease their monthly fixed payment pain point. We combined the internet economy & traditional economy as one. Where Users will gain two (2) benefits from one transaction.
            Our platform has enabled and simplified it so to be seamless to you.
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CSSModules( Scene_2, styles );