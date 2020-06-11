import React from 'react'
import styles from './header.module.css'
import CSSModules from 'react-css-modules';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/img/Logo.svg';
import cx from 'classnames';
function Header(props) {
  return (
    <div>
      <div className = "row">
        <div className = { styles.header } style = {{ width : `${props.width}px` }} >
          <img className= { styles.logo } src= { logo }/>
          <i className={cx("fa fa-bars", styles.iconSize)}></i> 
          <label className = { styles.menu}>convert <i class="fa fa-angle-down"></i></label>
          <label className = { styles.menu }>free credit <i class="fa fa-angle-down"></i></label>
        </div>
      </div>
    </div>
  )
}

export default CSSModules( Header, styles );