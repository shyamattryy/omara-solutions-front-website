    import React from 'react'
    import Styles from '../scss/fourth/four.module.scss'

      function fourthsection() {
      return (
      <div className={`${Styles.darkcoloumn} container-fluid`}>
        <div className={`${Styles.fourth} row container`}>
            <div className={`${Styles.creative} col-6`}>
                <div className={Styles.headingtext}>
                <h2>WE CREATE INNOVATIVE  <span>PLATFORMS</span> </h2>
                <p>We (OMRA SOLUTIONS) are a leading organization in space of technology development, fulfilment the Sales processes in B2B and B2C segment. We are helping to brands for automation process, Hire developers, Resource Management and helping renowned brands to achieve their goals in terms of sales business operations. We are working in business process outsourcing services, Sales Process, Automation technology. We are process oriented organization with certification of ISO 9001:2015 (Quality Management Systems).</p>
                <a href="#">Know More</a>
                </div>

            </div>
            <div className={`${Styles.sideimage} col-6`}>
                <img src="images/background/face.jpg" alt="" />
            </div>
        </div>
      </div>
      )
      }

    export default fourthsection