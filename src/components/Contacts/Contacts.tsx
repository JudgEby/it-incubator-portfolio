import React from 'react'
import styles from './Contacts.module.css'

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <h3>Контакты</h3>
        <form className={styles.form} action=''>
          <input type='text' />
          <input type='text' />
          <textarea name='' id='' cols={30} rows={10} />
        </form>
        <button>Отправить</button>
      </div>
    </div>
  )
}

export default Contacts
