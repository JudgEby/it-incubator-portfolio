import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Ян Добровольский</h3>
      <div className={styles.social}>
        <div className={styles.icon}></div>
        <div className={styles.icon}></div>
        <div className={styles.icon}></div>
        <div className={styles.icon}></div>
      </div>
      <span>&copy; 2021 Все права защищены</span>
    </footer>
  )
}

export default Footer
