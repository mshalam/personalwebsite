import React from 'react'
import styles from './About.module.css'

import { maurice } from '../images'
import { concert, realmadrid, plane } from '../images/extra'

const About = () => (
  <div className={styles.about}>
    <div className={styles.aboutMeContainer}>
      <div className={styles.aboutPhoto}>
        <img src={maurice} alt="" />
      </div>

      <div className={styles.aboutText}>
        <h2>Hey there! I'm Maurice Shalam, a Full-Stack Software Engineer</h2>
        <h4>
          2 years experience at American Express as a Software Engineer,
          automating financial reports and integrating Big Data ETL systems. I'm
          looking forward to expanding my knowledge of software development and
          leveraging my skills in programming to explore careers in the tech
          industry
        </h4>

        <div className={styles.techStack}>
          <div>
            <h3>Programming Languages</h3>
            <h4>
              Java • JavaScript • React • Redux • Node • Express • SQL • HTML •
              CSS
            </h4>
          </div>
          <div>
            <h3>Proficient In</h3>
            <h4>
              Unix • Git • Heroku • FullStack Development • Test Driven
              Development (TDD) • Agile Methodology
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
