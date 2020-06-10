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
        <div className = { styles.form_position }>
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className = { styles.formWrapper}>
                <h1 className = { styles.formTitle}>Send us a Message</h1>
                <label className = { styles.formTitleDetail}>Get in touch and let us know how we can help</label>
                <form>
                  <div className = { styles.input }>
                    <label className = { styles.label }>Your Name</label>
                    <TextField  placeholder="Placeholder" fullWidth variant="outlined"/>
                  </div>
                  <div className = { styles.input }>
                    <label className = { styles.label }>Your Email</label>
                    <TextField placeholder="Placeholder" fullWidth  variant="outlined" />
                  </div>
                  <div className = { styles.input }>
                    <label className = { styles.label }>Message</label>
                    <TextField multiline fullWidth rows={4} variant="outlined"/>
                  </div>
                </form>
                <div className = { styles.submit }>
                  <div className = { styles.telegram }>
                    <i className = {cx(styles.telegram, "fa fa-telegram")}></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className = { styles.contactInfo }>
                <div className = { styles.contactInfoItems }>
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
  )
}

export default CSSModules(Form, styles)