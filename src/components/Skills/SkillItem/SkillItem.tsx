import React from 'react'
import styles from './SkillItem.module.css'

type SkillItemType = {
  icon?: string
  title?: string
  description?: string
}

const SkillItem = (props: SkillItemType) => {
  const { title = 'no title', description = 'no description', icon } = props

  return (
    <div className={styles.skill}>
      <div className={styles.icon}></div>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.description}>{description}</span>
    </div>
  )
}

export default SkillItem
