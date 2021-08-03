import React from 'react'
import styles from './Header.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styleContainer.container}`}>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
