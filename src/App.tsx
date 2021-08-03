import React from 'react'
import styles from './App.module.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Skills from './components/Skills/Skills'
import RemoteJob from './components/RemoteJob/RemoteJob'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Skills />
      <RemoteJob />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
