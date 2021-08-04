import React from 'react'
import styles from './MyProjects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import ProjectItem from './ProjectItem/ProjectItem'

const MyProjects = () => {
  return (
    <div className={styles.projectsBlock}>
      <div className={`${styleContainer.container} ${styles.container}`}>
        <h2 className={styles.title}>Мои проекты</h2>
        <div className={styles.projects}>
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </div>
  )
}

export default MyProjects
