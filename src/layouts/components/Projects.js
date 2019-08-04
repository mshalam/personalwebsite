/* eslint-disable react/display-name */
import React from 'react'
import Link from 'gatsby-link'
import styles from './Projects.module.css'
import Container from './'

import {
  accessQRMockup,
  lightTextMockup,
  iphoneMockup,
} from '../images/projects'

import { chevronBlack } from '../images'

import {
  reactImg,
  bootstrapImg,
  firebaseImg,
  googlemapsImg,
  herokuImg,
  nodeImg,
  postgresqlImg,
  lightningImg,
  reduxImg,
  twilioImg,
} from '../images/tech'

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

const Project = props => {
  const techImgs = props.techImgs

  return (
    <div className={styles.project}>
      <div className={styles.description}>
        <div className={styles.projectname}>
          <h1>{props.projectname}</h1>
        </div>
        <div>
          <h4 className={styles.excerpt}>{props.excerpt}</h4>
          <p className={styles.excerpt}>
            <br />
            {props.excerptBullet1}
          </p>
          <p className={styles.excerpt}>{props.excerptBullet2}</p>
          <p className={styles.excerpt}>{props.excerptBullet3}</p>
        </div>
      </div>
      <div className={styles.mockupAndLinks}>
        <div className={styles.mockupContainer}>
          <img src={props.mockup} className={styles.mockup} alt="" />
          <div className={styles.mockupOverlay}>
            <div className={styles.techStack}>
              {techImgs
                ? techImgs.map(image => <img src={image} alt="" />)
                : 'Tech stack loading...'}
            </div>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <a href={props.siteUrl} target="_blank">
            Visit
          </a>
          <a href={props.githubUrl} target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <div id="projects" className={styles.projectsSection}>
    <div className={styles.projectsBar}>
      <h1>Projects</h1>
      <a onClick={() => toTop('top')} href="#">
        <img src={chevronBlack} />
      </a>
    </div>
    <div className={styles.projectsContainer}>
      <Project
        projectname="Light Text"
        mockup={lightTextMockup}
        excerpt="A text messaging client that allows users to send and receive bitcoin instantly over text message"
        excerptBullet1="• Developed with the Bitcoin Lightning Network, Twilio, Node, Express, React and Postgres"
        excerptBullet2="• Setup a full Bitcoin Lightning Node for instant transactions of Bitcoin"
        excerptBullet3="• Implemented text messaging through Twilio’s API, for a minimalist and easily understandable experience"
        siteUrl="http://light-text.herokuapp.com/"
        githubUrl="https://github.com/light-text/lightText"
        techImgs={[
          lightningImg,
          twilioImg,
          reactImg,
          nodeImg,
          reduxImg,
          postgresqlImg,
        ]}
      />
      <hr className={styles.projectHR} />
      <Project
        projectname="Access QR"
        mockup={accessQRMockup}
        excerpt="A website designed to generate email friendly ID Cards for tenants and guest of buildings"
        excerptBullet1="• Developed with React, Redux, Node, Express, Postgres, and QR Codes"
        excerptBullet2="• Implemented an intuitive user experience with an elegant design"
        excerptBullet3="• Fully customizable to the building or company using it"
        siteUrl="https://accessqr.herokuapp.com/home"
        githubUrl="https://github.com/mshalam/QRCode"
        techImgs={[reactImg, nodeImg, postgresqlImg, reduxImg, herokuImg]}
      />
      <hr className={styles.projectHR} />
    </div>
  </div>
)
