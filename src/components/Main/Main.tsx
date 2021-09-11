import React from 'react'
import styles from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'

const Main = () => {
  return (
    <main className={styles.mainBlock}>
      <div className={`${styleContainer.container} ${styles.container}`}>
        <div className={styles.text}>
          <span className={styles.hi}>Hi There</span>
          <h1 className={styles.name}>
            I am <span>Yan Dobrovolskiy</span>
          </h1>
          <p className={styles.description}>ReactJS Frontend Developer</p>
        </div>
        <div className={styles.photo}>Ava</div>
      </div>
    </main>
  )
}

export default Main
