import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css';
import Header from '../../components/Header';
import Scene_1 from './Scene_1';
import Scene_2 from './Scene_2';
import Scene_3 from './Scene_3';
import Scene_4 from './Scene_4';
import Enjoy from './Enjoy';
import Scene_6 from './Scene_6';
import Scene_7 from './Scene_7';
import Scene_8 from './Scene_8';
import Footer from '../Footer/Footer';
function LandingPage() {
  return (
    <>
      <Scene_1/>
      <Scene_2/>
      <Scene_3/>
      <Scene_4/>
      <Enjoy/>
      <Scene_6/>
      <Scene_7/>
      <Scene_8/>
      <Footer/>
    </>
  )
}

export default CSSModules( LandingPage, styles );