import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css';
import Scene5 from '../../assets/img/Scene5.svg';
import dotSquare from '../../assets/img/dotSquare.png';
import cx from 'classnames';
import calendar from '../../assets/img/calendar.png'
import bonus from '../../assets/img/bonus.svg'

function Enjoy() {
  return (
    <div className = {styles.scene_5_container}>
      <h1 className = {styles.Scene5_title}>
        Enjoy The Benefits Below
      </h1>
      <div className = "row">
        <div className="userml">
        <div className="col-12 col-lg-6" style = {{ width : '530px'}}>
          <img src = { dotSquare } className = { styles.dotSquare1 }/>
          <div>
            <img src = { Scene5 } className = { styles.Scene5 }/>
          </div>
        </div>
        <h1 className = {styles.Scene5_title1}>
          Enjoy The Benefits <br/>Below
        </h1>
        <div className={cx("col-12 col-lg-6", styles.center_items1)} style = {{ width:'530px'}}>
          <div>
            <div className={cx("row", styles.Scene5_text_position)}>
              <div className = "col-12">
                <div className = "row d-flex">
                  <div style = {{paddingRight : '10px'}}>
                    <div className={ styles.icon_div}>
                      <i class="fa fa-refresh" aria-hidden="true" style = {{color:'blue', fontSize: '25px', marginTop:'18px',marginLeft:'20px'}}></i>
                    </div>
                  </div>
                  <div >
                    <h2 className = { styles.Scene5_title2 }>
                      Convert to <strong className = { styles.strong }>"CONVERT"</strong> and <br/>
                      Earn Monthly
                    </h2>
                    <h1 className = { styles.Scene5_text }>
                      <strong className = {styles.strong}>“CONVERT”</strong> helps users to earn from every monthly 
                      fixed bills. Now you can convert your monthly 
                      payment to new form of cash.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("row", styles.Scene5_text_position)}>
              <div className = "col-12">
                <div className = "row d-flex">
                  <div style = {{paddingRight : '10px'}}>
                    <div className={ styles.icon_div}>
                      <img src = { calendar } style = {{ width : '60px'}}/>
                    </div>
                  </div>
                  <div>
                    <h1 className = { styles.Scene5_title2 }>
                      Free Credit Extension (FCX)<br/> up to 45 days*
                    </h1>
                    <h1 className = { styles.Scene5_text }>
                      With the amazing "FCX" feature, you can now 
                      free up your cash flow and enhance your 
                      personal finance 
                    </h1>
                  </div>              
                </div>
              </div>
            </div>
            <div className={cx("row", styles.Scene5_text_position)}>
              <div className = "col-12">
                <div className="row d-flex">
                  <div  style = {{paddingRight : '10px'}}>
                    <div className={ styles.icon_div }>
                      <img src = { bonus } style = {{ marginLeft : '17px', marginTop : '17px'}}/>
                    </div>
                  </div>
                  <div>
                    <h1 className = { styles.Scene5_title2 } style = {{marginTop : '20px'}}>Double Bonus</h1>
                    <h1 className = { styles.Scene5_text }>
                      At <strong className = { styles.strong }>"CONVERT"</strong>, you et double! From the
                      traditional credit card benefits (Cashback and 
                      AirMiles Point) and earn from your regular monthly commitments.
                    </h1>
                  </div>  
                </div>            
              </div>            
            </div>
            <div className="row" style = {{ textAlign : 'right'}}>
              <div className = {styles.button_position}>
                <div className = { styles.button }>MORE DETAILS</div>
              </div>
            </div>         
          </div>   
        </div>        
      </div>
      </div>
    </div>
  )
}

export default CSSModules( Enjoy, styles );
