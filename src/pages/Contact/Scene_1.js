import React from 'react';
import Header from '../../components/Header';
import CSSModules from 'react-css-modules';
import styles from './Contact.module.css';

function Scene_1() {
  return (
    <div className = { styles.Scene_1_container }>
      <div style = {{paddingLeft :'10px', paddingRight : '10px'}}>
        <Header width = {1200}/>
      </div>
      <div className="row">
        <div className="userml"  style = {{paddingLeft :'10px', paddingRight : '10px'}}>
          <h1 className = { styles.pageTitle } style={{width:'1200px'}}>Contact Us</h1>
        </div>
      </div>
    </div>
  )
}

export default CSSModules(Scene_1, styles)
