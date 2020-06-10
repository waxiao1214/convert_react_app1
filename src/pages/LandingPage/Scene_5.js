import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.css';
import Scene5 from '../../assets/img/Scene5.svg';
import dotSquare from '../../assets/img/dotSquare.png';
import cx from 'classnames';
function Scene_5() {
  return (
    <div className = {styles.scene_5_container}>
      <h1 className = {styles.Scene5_title}>
        Enjoy The Benefits Below
      </h1>
      <div className = "row">
        <div className="col-12 col-lg-6">
          <img src = { dotSquare } className = { styles.dotSquare1 }/>
          <div>
            <img src = { Scene5 } className = { styles.Scene5 }/>
          </div>
        </div>
        <h1 className = {styles.Scene5_title1}>
          Enjoy The Benefits <br/>Below
        </h1>
        <div className={cx("col-12 col-lg-6", styles.center_items1)}>
          <div>
            <div className={cx("row", styles.Scene5_text_position)}>
              <div className = "col-12">
                <div className = "row">
                  <div className = "col-12 col-lg">
                    <div className={ styles.icon_div}>
                    </div>
                  </div>
                  <div className = "col-12 col-lg-10">
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
                <div className = "row">
                  <div className='col-12 col-lg'>
                    <div className={ styles.icon_div}>
                    </div>
                  </div>
                  <div className='col-12 col-lg-10'>
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
                <div className="row">
                  <div className = "col-12 col-lg-2">
                    <div className={ styles.icon_div }>
                    </div>
                  </div>
                  <div className = 'col-12 col-lg-10'>
                    <h1 className = { styles.Scene5_title2 }>Double Bonus</h1>
                    <h1 className = { styles.Scene5_text }>
                      At <strong className = { styles.strong }>"CONVERT"</strong>, you et double! From the
                      traditional credit card benefits (Cashback and 
                      AirMiles Point) and earn from your regular monthly commitments.
                    </h1>
                  </div>  
                </div>            
              </div>            
            </div>
            <div className="row">
              <div className = {styles.button_position}>
                <div className = { styles.button }>MORE DETAILS</div>
              </div>
            </div>         
          </div>   
        </div>        
      </div>
    </div>
  )
}

export default CSSModules( Scene_5, styles );
