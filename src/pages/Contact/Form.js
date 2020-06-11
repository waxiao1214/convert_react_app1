import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Contact.module.css';
import contactInfo from '../../assets/img/contactInfo.png';
import { TextField, StylesProvider } from '@material-ui/core';
import cx from 'classnames';
import emailIcon from '../../assets/img/email.png';
import faceBook from '../../assets/img/faceBookIcon.png';
import camera from '../../assets/img/camera.png';

function Form() {
  return (
      <div className = { styles.formContainer }>
        <div className="row">
          <div className = "userml">
            <div className = {cx("d-flex", styles.formcontent)}>
              <div style = {{ padding:'61px 77px 0 80px'}}>
                <label className = { styles.formTitle}>Send us a Message</label><br/>
                <label className = { styles.formTitleDetail}>Get in touch and let us know how we can help</label>
                <form style = {{width:"500px"}}>
                    <div className = { styles.input }>
                      <label className = { styles.label }>Your Name</label>
                      <TextField style = {{height:'50px'}} placeholder="Placeholder" fullWidth variant="outlined"/>
                    </div>
                    <div className = { styles.input }>
                      <label className = { styles.label }>Your Email</label>
                      <TextField placeholder="Placeholder" fullWidth  variant="outlined" />
                    </div>
                    <div className = { styles.input }>
                      <label className = { styles.label }>Message</label>
                      <textarea style = {{ width: '500px'}}/>
                    </div>
                </form>
                <div className = { styles.submit }>
                  <div className = { styles.telegram }>
                    <i className = {cx(styles.telegram, "fa fa-telegram")}></i>
                  </div>
                </div>
              </div>
              <div className = { styles.contactInfo }>  
                <div className = { styles.Info }>
                  <div>
                    <label className = { styles.contactInfoTitle}>
                      Contact Information
                    </label>
                  </div>
                  <div className = { styles.contactInfoItems }>
                    <label className = { styles.email}>
                      <img className = { styles.emailIcon } src = { emailIcon }/>
                      Support@Convert-Bills.com
                    </label>
                  </div>
                  <div className = { styles.contactInfoItems }>
                    <img className = { styles.icons } src = { faceBook }></img>
                    <img className = { styles.icons } src = { camera }></img>
                  </div>
                </div>             
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CSSModules(Form, styles)


