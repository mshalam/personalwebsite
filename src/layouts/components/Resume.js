/* eslint-disable react/display-name */
import React from 'react'
import Link from 'gatsby-link'

import styles from './Resume.module.css'
import Container from './'

import {
  porterandsailImg,
  fsaImg,
  mizuhoImg,
  lordabbettImg,
  nyuImg,
  browserImg,
  bankImg,
  fundImg,
  diplomaImg,
  amexImg,
  etradeImg,
} from '../images/resume'

import { chevronBlack } from '../images'

let marginY = 0
let destination = 0
let speed = 20
let scroller = null

const toTop = elementId => {
  destination = document.getElementById(elementId).offsetTop
  scroller = setTimeout(() => {
    initScroll(elementId)
  }, 1)
  marginY -= speed
  if (marginY <= 0) {
    clearTimeout(scroller)
  }
  window.scroll(0, marginY)
}

const ResumeItem = props => {
  return (
    <div className={`${styles.cdTimelineBlock} jsCdBlock`}>
      <div
        className={`${styles.cdTimelineImg} ${
          styles.cdTimelineImgPicture
        } jsCdImg`}
      >
        <img src={props.timelineIcon} alt="Picture" />
      </div>

      <div className={`${styles.cdTimelineContent} jsCdContent`}>
        <div className={styles.wrapCollabsible}>
          <input id={props.id} className={styles.toggle} type="checkbox" />

          <label htmlFor={props.id} className={styles.lblToggle}>
            <div className={styles.jobTopContainer}>
              <h4>{props.jobTitle}</h4>
              <img src={props.logo} />
            </div>

            <h5>{props.department}</h5>
            <h5>{props.group}</h5>
          </label>

          <div className={styles.collapsibleContent}>
            <div className={styles.contentInner}>
              <ul>
                {props.descriptions &&
                  props.descriptions.map(description => <li>{description}</li>)}
              </ul>
            </div>
          </div>

          <span className={styles.cdTimelineDate}>{props.dates}</span>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <div id="resume" className={styles.resumeSection}>
    <div className={styles.resumeBar}>
      <h1>Experience</h1>
      <a onClick={() => toTop('top')} href="#">
        <img src={chevronBlack} />
      </a>
    </div>
    <section className={`${styles.cdTimeline} jsCdTimeline`}>
      <div className={styles.tapForDetails}>
        <span />
      </div>
      <div className={styles.cdTimelineContainer}>
        <ResumeItem
          id="Etrade"
          companyName="E-Trade"
          jobTitle="Staff Full Stack Software Engineer"
          department=""
          group=""
          dates="Feb 2019 - Present"
          descriptions={[
            'Converted etrade.com into a Single Page Application (SPA) using REACT',
            'Automated workflows and processes using Java on the backend',
            'Developed APIs for the platform and solved scaling challenges',
          ]}
          siteUrl="https://etrade.com"
          logo={etradeImg}
          timelineIcon={browserImg}
        />

        <ResumeItem
          id="Amex"
          companyName="American Express"
          jobTitle="Software Engineer"
          department=""
          group=""
          dates="Aug 2016 - Dec 2018"
          descriptions={[
            'Contributed to design, development, debugging, deploying and documenting software and systems that met the needs of customer-facing applications, business applications, and internal end user applications',
            'Responsible for integration of Big Data ETL system using Java to create efficient and accessible data',
            'Created and became the Subject Matter Expert for the Elastic Search Stack for easily searchable and visualized logs; automated job runs and designed complex workflows for scheduled unix and ETL jobs',
            'Held learning sessions for On-Shore, Off-Shore, and Contractors to train on Amex’s Internal tools',
            'Responsible for setting up and managing the Infrastructure Across multiple teams',
          ]}
          siteUrl="https://map-it-fsa.firebaseapp.com/"
          logo={amexImg}
          timelineIcon={browserImg}
        />

        <ResumeItem
          id="NYU"
          companyName="New York University"
          jobTitle="Bachelor of Arts"
          department="Computer Science, College of Arts & Science"
          group="Business of Technology, Stern School of Business "
          dates="May 2016"
          descriptions={[]}
          logo={nyuImg}
          timelineIcon={diplomaImg}
        />
      </div>
    </section>
  </div>
)
