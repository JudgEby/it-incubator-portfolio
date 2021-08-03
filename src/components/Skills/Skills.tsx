import React from 'react'
import styles from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import SkillItem from './SkillItem/SkillItem'

const Skills = () => {
  return (
    <div className={styles.skillsBlock}>
      <div className={`${styleContainer.container} ${styles.container}`}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skills}>
          <SkillItem
            title={'ReactJS'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, ratione.'
            }
          />
          <SkillItem
            title={'TypeScript'}
            description={'Lorem ipsum dolor sit amet, '}
          />
          <SkillItem
            title={'Redux'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Skills
