import React from 'react';
import styles from './card.module.css';
import cx from 'classnames';
import CSSModules from 'react-css-modules';
function Card(props) {
  return (
    <div>
      <img src = { props.image }/>
      <h1>{ props.title }</h1>
      <h1>{ props.percent }</h1>
      <h1>Earning</h1>
      <h1>{ props.text }</h1>
    </div>
  )
}
export default CSSModules( Card, styles );