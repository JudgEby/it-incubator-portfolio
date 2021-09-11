import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <header className={styles.nav}>
      <a className={styles.link} href=''>
        Main
      </a>
      <a className={styles.link} href=''>
        Skills
      </a>
      <a className={styles.link} href=''>
        Projects
      </a>
      <a className={styles.link} href=''>
        Contacts
      </a>
    </header>
  )
}

export default Navigation
