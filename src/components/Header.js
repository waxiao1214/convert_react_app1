import React from 'react'
import styles from './header.module.css'
import CSSModules from 'react-css-modules';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/img/Logo.svg';
import cx from 'classnames';
function Header() {
  return (
    <div>
      <div className = "row">
        <div className = { styles.left}></div>
          <div className = "col">
            <img className= { styles.logo } src= { logo }/>
          </div>
          <div className = {styles.right}>
            <div className = 'col'>
              <div className="col">
                <i className={cx("fa fa-bars", styles.iconSize)}></i> 
              </div>
              <div className = { cx("col", styles.title) }>
                <h1 className = { styles.menu }>convert <i class="fa fa-angle-down"></i></h1>
                <h1 className = { styles.menu }>free credit <i class="fa fa-angle-down"></i></h1>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CSSModules( Header, styles );