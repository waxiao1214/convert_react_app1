import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Contact.module.css';
import Form from './Form.js';
import '../../assets/css/faq.css'
import faqData from '../../assets/data/faq';
function Faq() {
  return (
    <div className = { styles.faqContainer }>
      <div className  = { styles.faqContent}>
        <div>
          <p className = { styles.general_QA}>
            GENERAL Q&A
          </p>
          <p className = { styles.faqIntro }>
            How Can We Help?
          </p>
        </div>
        <div className="panel-group" id="faq">
              { faqData.map((item, key) => (
                  <div className="panel" style = {{width:"900px", margin:'auto'}}>
                    <label className="faqTopic">
                      { item.title }
                    </label>
                    <label style = {{ float : 'right', color: '#1123FF', fontSize:'20px'}}data-toggle="collapse" data-parent="#faq" href={`#link${key}`}>+</label>
                    <div id={`link${key}`} class="panel-collapse collapse">
                      <label class="panel-body">
                        { item.content }
                      </label>
                    </div>
                  </div>
              )) }
            </div>
        </div>
    </div>
  )
}
export default CSSModules(Faq, styles);