import React from 'react';
import styles from './card.module.css';
import cx from 'classnames';
import CSSModules from 'react-css-modules';
function Card(props) {
  debugger
  return (
    <div style = {{width : '265px', height : '300px', paddingTop : '22px', paddingLeft: '27px', paddingRight:'27px'}}>
      <img className = { styles.image } src = { props.image }/>
      <h1 style = {{ color : `${props.color}`}} className = {styles.title }>{ props.title }</h1>
      <h1 style = {{ color : `${props.color}`}} className = { styles.percent }>{ props.percent }%</h1>
      <h1 style = {{ color : `${props.color}`}} className = { styles.earning }>Earning</h1>
      <h1 style = {{ color : `${props.color}`}} className = { styles.text }>{ props.text }</h1>
    </div>
  )
}
export default CSSModules( Card, styles );