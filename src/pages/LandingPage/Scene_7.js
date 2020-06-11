import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css'
import Header from '../../components/Header';
import scene_1_phone from '../../assets/img/scene1_phone.png'
import cx from 'classnames'
import { TextField, Button } from '@material-ui/core'
function Scene_7() {
  return (
    <div className={ styles.scene_7_container }>
        <div className = "row">
          <div className = "userml d-flex">
            <div className = "col-12 col-lg-6" style = {{width : '530px'}} >
              <label className = { styles.scene7_text }>
                To know more about our<br/>
                news and updates,<br/>
                please subscribe now
              </label>
            </div>
            <div className = "col-12 col-lg-6 d-flex" style = {{width: '530px'}}>
                <TextField className = { styles.subscribe_input } fullWidth variant="outlined" 
                  placeholder = "Your Email" style = {{ paddingTop :'50px'}}
                />
                <div className = { styles.Subscribe }>SUBSCRIBE</div>
            </div>
          </div>
        </div>
    </div>     
  )
}

export default CSSModules( Scene_7, styles );