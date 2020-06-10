import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Footer.module.css';
import logo from '../../assets/img/Logo.svg';
import faceBook from '../../assets/img/faceBook.png';
import instagram from '../../assets/img/instagram.png';
import cx from 'classnames';

function Footer() {
  return (
    <div className={ styles.ontainer }>
      <div className = "row">
        <div class="col-12 col-md-6 col-lg-3">
          <img src = { logo } />
          <div className = "row">
            <div className = { styles.icons }>
              <img src = { faceBook } style = {{ width: '100%' }}/>
            </div>
            <div className = { styles.icons }>
              <img  src = { instagram } style = {{ width : '100%' }}/>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <label  className = { styles.title }>COMPANY</label>
          <div>
            <h1 className = { styles.link }><a>About Convert</a></h1>
            <h1 className = { styles.link }><a>Pricing</a></h1>
            <h1 className = { styles.link }><a>Contact Us</a></h1>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <label  className = { styles.title }>WHY CHOOSE US</label>
          <div>
            <h1 className = { styles.link }><a>Fraud & Security</a></h1>
            <h1 className = { styles.link }><a>FAQ</a></h1>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <label  className = { styles.title }>LEGAL</label>
          <div>
            <h1 className = { styles.link }><a>Terms & Conditions</a></h1>
            <h1 className = { styles.link }><a>Privacy Policy</a></h1>
          </div>
        </div>
      </div>
      <p style = {{borderBottom :'solid 1px rgba(196, 196, 196, 0.2)'}}></p>
      <div style = {{ textAlign : 'center'}}>
        <p  className = { styles.copywriter }>Copyright© 2020 Convert All Rights Reserved</p>
      </div>
    </div>    
  )
}

export default CSSModules( Footer, styles );