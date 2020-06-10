import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css';
import star from '../../assets/img/star.png';
import cx from 'classnames';
import video_placeholder from '../../assets/img/video_placeholder.svg'
import logo1 from '../../assets/img/Logo1.svg';
import Scene3_1_1 from '../../assets/img/Scene3_1_1.svg';
import Scene3_1_2 from '../../assets/img/Scene3_1_2.svg';
import Scene3_1_3 from '../../assets/img/Scene3_1_3.svg';
import Scene3_2_1 from '../../assets/img/Scene3_2_1.svg';
import Scene3_2_2 from '../../assets/img/Scene3_2_2.svg';
import Scene3_3_1 from '../../assets/img/Scene3_3_1.svg';
import Scene3_4_1 from '../../assets/img/Scene3_4_1.svg';

function Scene_3() {
  return (
    <div className = { styles.scene_3_container }>
      <div className = "row">
        <div className = "col-12 col-lg-6"></div>
        <div className = "col-12 col-lg-6">
          <img src = { video_placeholder } className = {styles.video_placeholder}></img>
        </div> 
      </div>
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className = { styles.star }>
            <div style = {{textAlign : 'center'}}>
              <p><img style = {{ width : '100px' }} src = { star } /></p>
            </div>
            <div style = {{textAlign : 'center'}}>
              <div className = { styles.star_div }>
                <h1 className={styles.star_text}>
                  Our platform is designed for users to convert their monthly fixed bills (Rental (Office, Retail, Home) & Installment Payment...) 
                  to new form of cash while they utilise 
                  <img  src = { logo1 } style = {{width:'164px'}}></img>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className ="col-12">
          <h1 className = { styles.convert_and_pay_text}> Convert and PAY With <img  src = { logo1 }></img></h1>
        </div>
      </div>
      <div className = "row">
        <div className ="col-12">
          <p>
            At <b className = {styles.strong }>CONVERT</b>, you can pay any of your<br/>
            monthly fixed bills listed below:
          </p>        
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-5">
          <div className = { styles.center_items }>
            <h1>Convert Your <br/>
            <b className = { styles.strong }>Rental</b> To Cash<br/><a>Office | </a>  <a>Retail |</a> <a>Home Rental</a></h1>
          </div>
        </div>
        <div className="col-12 col-lg-7">
            <div >
              <img className = { styles.right } src = { Scene3_1_1 } style = {{width : '30%', paddingLeft:'10px'}}/>
              <img className = { styles.right } style={{boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25)', paddingLeft:'10px', width : '30%'}} src = { Scene3_1_2 } />
              <img className = { styles.right } src = { Scene3_1_3 } style = {{width : '30%', paddingLeft:'50px'}}/>
            </div>
        </div>
      </div>
      <div className={cx("row", styles.hSpace)} >
        <div className="col-12 col-lg-5">
          <div className = { styles.center_items }>
          <h1>Convert Your <br/>
          <b className = { styles.strong }>Installment</b>To Cash<br/><a>Car | </a> <a>Home Installment</a></h1>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <div className = "row">
            <div className="col-4"></div>
            <div className="col-4">
              <img style={{boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25)', width:'100%'}} src = { Scene3_2_2 } />
            </div>
            <div className="col-4">
              <img src = { Scene3_2_1 } style = {{marginTop:'20px', marginBottom : "-20px", width : '100%'}}/>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("row", styles.hSpace)}>
        <div className="col-12 col-lg-5">
          <div className = { styles.center_items }>
          <h1>Convert Your <br/>
          <strong className = { styles.strong }>Education</strong> Bills To Cash<br/><a>School | </a> <a>Tuition Fees etc..</a></h1>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <div className = { styles.right }>
            <img src = { Scene3_3_1 } />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className = { styles.center_items }>
          <h1>Convert Your <br/>
          <strong className = { styles.strong }>Service</strong> Bills To Cash<br/><a>Condo |</a> <a>Parking |</a><a> Security Fees</a></h1>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className = { styles.right }>
            <img src = { Scene3_4_1 } />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CSSModules( Scene_3, styles );