import React from 'react'
import Link from 'gatsby-link'
import styles from './Header.module.css'
import noelle from '../images/noelle.jpg'
import { Container } from './'

let marginY = 0
let destination = 0
let speed = 15
let scroller = null

const initScroll = elementId => {
  destination = document.getElementById(elementId).offsetTop
  scroller = setTimeout(() => {
    initScroll(elementId)
  }, 1)
  marginY += speed
  if (marginY >= destination) {
    clearTimeout(scroller)
  }
  window.scroll(0, marginY)
}

const toTop = () => {
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

const Header = () => (
  <header className={styles.header}>
    <div className={styles.titleNavWrapper}>
      <div className={styles.nameContainer}>
        <h1 className={styles.siteTitle}>
          <a href="/" id="top">
            Maurice Shalam
          </a>
        </h1>
      </div>

      <div className={styles.desktopNav}>
        <nav className={styles.mainNav}>
          <div className={styles.navWrapper}>
            <ul>
              <li>
                <a onClick={() => initScroll('projects')} href="#projects">
                  PROJECTS
                </a>
              </li>
              <li>
                <a onClick={() => initScroll('resume')} href="#resume">
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a href="mailto:mshalam04@gmail.com?subject=HELLO!">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
