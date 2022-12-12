import React from 'react'
import styles from './styles/Head.module.css'
const Head = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li><a href='/'>HOME</a></li>
          <li><a href='/fichas'>FICHAS</a></li>
          <li><a href='/cadastro'>CADASTRO</a></li>
        </ul>
      </nav>

    </div>
  )
}

export default Head