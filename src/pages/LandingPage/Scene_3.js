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
        <div className = "userml">
          <div className = "col-12 col-md-6"></div>
          <div className = "col-12 col-md-6">
            <img src = { video_placeholder } className = {styles.video_placeholder}></img>
          </div> 
        </div>
      </div>
      <div className="row">
        <div className = "userml">
          <div className="col-12 col-lg-12">
            <div className = { styles.star }>
              <div style = {{textAlign : 'center'}}>
                <p><img style = {{ width : '100px' }} src = { star } /></p>
              </div>
              <div style = {{textAlign : 'center'}}>
                <div className = { styles.star_div }>
                  <label className={styles.star_text}>
                    Our platform is designed for users to convert their monthly fixed bills (Rental (Office, Retail, Home) & Installment Payment...) 
                    to new form of cash while they utilise 
                    <img  src = { logo1 } style = {{height:'30px', marginTop: '-8px'}}></img>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className = "userml">
          <div style = {{ width : '1060px'}}>
            <h1 className = { styles.convert_and_pay_text}> Convert and PAY With 
              <img  style = {{ height:'40px', marginTop:'-15px'}} src = { logo1 }></img>
            </h1>
          </div>
        </div>
      </div>
      <div className = "row">
        <div className = "userml">
          <div style = {{ width : '1060px'}}>
            <p className = { styles.pay_detail}>
              At <b className = {styles.strong }>CONVERT</b>, you can pay any of your<br/>
              monthly fixed bills listed below:
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className = "userml d-flex">
          <div style = {{ width : '480px'}}>
            <div className = { styles.center_items }>
              <h1>Convert Your <br/>
              <b className = { styles.strong }>Rental</b> To Cash<br/><a>Office | </a>  <a>Retail |</a> <a>Home Rental</a></h1>
            </div>
          </div>
          <div style = {{width : '580px'}}>
                <img className = { styles.right } src = { Scene3_1_1 } style = {{width : '166px', marginLeft:'37px'}}/>
                <img className = { styles.right } style={{boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25)', marginLeft:'37px', width : '166px'}} src = { Scene3_1_2 } />
                <img className = { styles.right } src = { Scene3_1_3 } style = {{width : '166px'}}/>
          </div>
        </div>
      </div>
      <div className={cx("row", styles.hSpace)} >
        <div className = "userml">
          <div className="col-12 col-lg-6" style = {{ width : '530px'}}>
            <div className = { styles.center_items }>
            <h1>Convert Your <br/>
            <b className = { styles.strong }>Installment</b>To Cash<br/><a>Car | </a> <a>Home Installment</a></h1>
            </div>
          </div>
          <div className="col-12 col-lg-6" style = {{ width : '530px'}}>
              <img  className = { styles.right } src = { Scene3_2_1 } style = {{marginTop:'20px', marginBottom : "-20px", width : '166px'}}/>
              <img  className = { styles.right } style={{boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25)', marginRight : '37px', width:'166px'}} src = { Scene3_2_2 } />
          </div>
        </div>
      </div>
      <div className={cx("row", styles.hSpace)}>
        <div className = "userml">
          <div className="col-12 col-lg-6" style = {{ width : '530px'}}>
            <div className = { styles.center_items }>
            <h1>Convert Your <br/>
            <strong className = { styles.strong }>Education</strong> Bills To Cash<br/><a>School | </a> <a>Tuition Fees etc..</a></h1>
            </div>
          </div>
          <div className="col-12 col-lg-6" style = {{ width : '530px'}}>
            <div className = { styles.right }>
              <img src = { Scene3_3_1 } style = {{ width : '410px', height:'220px', marginRight:'-5px'}}/>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("row", styles.hSpace)}>
        <div className = "userml">
          <div className="col-12 col-lg-6" style = {{ width : '530px', height:'220px'}}>
            <div className = { styles.center_items }>
              <h1>Convert Your <br/>
              <strong className = { styles.strong }>Service</strong> Bills To Cash<br/><a>Condo |</a> <a>Parking |</a><a> Security Fees</a></h1>
            </div>
          </div>
          <div className="col-12 col-lg-6" style = {{ width : '530px'}}>
            <div className = { styles.right }>
              <img src = { Scene3_4_1 } style = {{ width:'410px', height : '220px', marginRight: '-5px'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CSSModules( Scene_3, styles );