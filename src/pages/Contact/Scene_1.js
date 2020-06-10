import React from 'react';
import Header from '../../components/Header';
import CSSModules from 'react-css-modules';
import styles from './Contact.module.css';

function Scene_1() {
  return (
    <div className = { styles.Scene_1_container }>
      <Header/>
      <h1 className = { styles.pageTitle }>Contact Us</h1>
    </div>
  )
}

export default CSSModules(Scene_1, styles)
