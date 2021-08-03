import React from 'react'
import styles from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'

const Main = () => {
  return (
    <main className={styles.mainBlock}>
      <div className={`${styleContainer.container} ${styles.container}`}>
        <div className={styles.text}>
          <span>Hi There</span>
          <h1>
            I am <span>Yan Dobrovolskiy</span>
          </h1>
          <p>ReactJS Frontend Developer</p>
        </div>
        <div className={styles.photo}>Ava</div>
      </div>
    </main>
  )
}

export default Main
