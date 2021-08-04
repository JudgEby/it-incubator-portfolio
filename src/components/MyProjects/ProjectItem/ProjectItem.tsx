import React from 'react'
import styles from './ProjectItem.module.css'

const ProjectItem = () => {
  return (
    <div className={styles.project}>
      <div className={styles.previewImage}>
        <a href=''>Перейти</a>
      </div>
      <div className={styles.textField}>
        <span className={styles.title}>Название проекта</span>
        <span className={styles.description}>Краткое описание проекта</span>
      </div>
    </div>
  )
}

export default ProjectItem
