import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <header className={styles.nav}>
      <a className={styles.link} href=''>
        Главная
      </a>
      <a className={styles.link} href=''>
        Скиллы
      </a>
      <a className={styles.link} href=''>
        Работы
      </a>
      <a className={styles.link} href=''>
        Контакты
      </a>
    </header>
  )
}

export default Navigation
