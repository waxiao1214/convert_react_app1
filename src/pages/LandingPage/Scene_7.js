import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css'
import Header from '../../components/Header';
import scene_1_phone from '../../assets/img/scene1_phone.png'
import cx from 'classnames'
import { TextField } from '@material-ui/core'
function Scene_7() {
  return (
    <div className={ styles.scene_7_container }>
        <div className = "row">
          <div className = "col-12 col-lg-6" >
            <label className = { styles.scene7_text }>To know more about our news and updates, please subscribe now</label>
          </div>
          <div className = "col-12 col-lg-6">
          <TextField fullWidth variant="outlined"/>
          </div>
        </div>
    </div>     
  )
}

export default CSSModules( Scene_7, styles );