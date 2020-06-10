import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css'
import Header from '../../components/Header';
import scene_1_phone from '../../assets/img/scene1_phone.png'
import cx from 'classnames'
function Scene_1() {
  return (
    <div className={ styles.scene_1_container }>
      <Header/>
      <div className = "row">
        <div class="col-10 col-lg-7"  style = {{marginRight : '-50px'}}>
          <div className={styles.title_position}>
            <h1 className={ styles.convert_title }>
              <b className={ styles.bold }>Convert</b> your <br/>monthly bills to extra cash
            </h1>
          </div>
        </div>
        <div class="col-10 col-lg-5">
          <div className = { styles.center } >
            <img data-aos="fade-left" src = { scene_1_phone } className = { styles.image }/>
          </div>      
        </div>
      </div>
    </div>
  )
}

export default CSSModules( Scene_1, styles );